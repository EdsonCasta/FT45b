const express = require("express");

let publications = [];
let id = 0;

const server = express();

server.use(express.json());

server.post("/posts", (req, res) => {
    const { author, title, contents } = req.body
    if(author && title && contents) {
        const newPost = {
            id: ++id,
            author,
            title,
            contents
        }
        publications.push(newPost);
        res.status(201).json(publications)
    } else {
        res
            .status(404)
            .json({
                error:
                  "No se recibieron los parámetros necesarios para crear la publicación"
            })
    }

})

server.get("/posts", (req, res) => {
    const { author, title } = req.query
    if(author && title) {
        const filteredPublications = publications.filter(
            newPost => newPost.author === author && newPost.title === title
        )
        if(filteredPublications.length){
        return res.status(200).json(filteredPublications)
        } else {
            return res.status(400).json({
                error:
                  "No existe ninguna publicación con dicho título y autor indicado",
              })
        }
    } else {
        return res.status(400).json({ error: "Faltan datos!!!"})
    }
})

server.get("/posts/:author", (req, res) => {
    const { author } = req.params
    const filteredPublications = publications.filter(
        (newPost) => newPost.author === author
    )
    if(filteredPublications.length){
        return res.status(200).json(filteredPublications)
    }
    res.status(404).json({error: "No existe ninguna publicación del autor indicado"})
})

server.put("/posts/:id", (req, res) => {
    const { id } = req.params
    const { title, contents } = req.body

    if(title && contents) {
        let filteredPublication = publications.find(
            newPost => newPost.id === Number(id)
        )
        if(!filteredPublication){
            res.status(404).json({error: "No se recibió el id correcto necesario para modificar la publicación"})
        } else {
            filteredPublication = { ...filteredPublication, title, contents}
            res.status(200).json(filteredPublication)
        }
    } else {
        return res.status(400).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"})
    }
})

server.delete("/posts/:id", (req, res) => {
    const { id } = req.params
    if(!id){
        res.status(404).json({error: "No se recibió el id de la publicación a eliminar"})
    } else {
        let filteredPublication = publications.filter(
            newPost => newPost.id !== Number(id)
        )
        if(publications.length === filteredPublication.length) {
            res.status(404).json({error: "No se recibió el id correcto necesario para eliminar la publicación"})
        } else {
            publications = filteredPublication
            res.status(200).json({ success: true })
        }
    }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
