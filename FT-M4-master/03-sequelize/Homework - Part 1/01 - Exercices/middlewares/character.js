const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post('/', async (req, res) => {
    try {
        const { code, name, age, race, hp, mana } = req.body

        if(![code, name, hp, mana].every(Boolean))
        return res.status(404)
        .json({message: 'Falta enviar datos obligatorios'})

        const newCharacter = await Character.findOrCreate({where:{code, name, age, race, hp, mana}})

        res.status(201).json(newCharacter)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const { race, age } = req.query

        const attributes = Object.keys(req.query)

        let characters;

        if(race && age){
            characters = await Character.findAll({attributes})
            return res.status(200).json(characters)
        }

        if(race){
            await Character.findAll({where: { race }})

            return res.status(200).json(characters)
        }

        characters = await Character.findAll()

        return res.status(200).json(characters)

    } catch (error) {
        
    }
})

router.get('/:code', async (req, res) => {
    try {
        const { code } = req.params

        const character = await Character.findByPk(code)

        if(!character) res.status(404)
        .json({message: `El codigo ${code} no corresponde a
        un personaje existente`})

        return res.status(200).json(character)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.put('/:attribute', async (req, res) => {
    try {
        const { attribute } = req.params
        const { value } = req.query

        await Character.update({
            [attribute]: value,
            where: {
                [attribute]: null
            }
        })
        res.status(200).json({message: 'Personajes actualizados'})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router;
