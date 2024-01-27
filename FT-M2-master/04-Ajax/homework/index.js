// Ocultamos la imagen
let img = $('img')
img.hide();

// Listar amigos
const lista = $('#lista');
const boton = $('#boton');
const URL = 'http://localhost:5000/amigos';

const listFriends = (info) => {
    // console.log(info);
    for (const amigo of info) {
        lista.append(`<li>${amigo.id}-${amigo.name}</li>`)
    }
    img.hide()
}

const getFriends = ()=>{
    img.show()
    lista.empty()
    $.get(url, listFriends)
}

boton.click(getFriends);

// Buscar amigo
const search = $('#search') 
const input = $('#input')
const friend = $('#amigo')

// limpiar inputs
const cleanInputs = () => {
    input.val('')
    inputDelete.val('')
}

const nameFriend = (info) => {
    friend.text(info.name)
    cleanInputs()
}

const errorFriend = () => {
    alert(`El amigo con el id ${input.val()} no existe`)
}

const showFriendById = () => {
    const id = input.val()
    $.get(`${URL}/${id}`, nameFriend).fail(errorFriend)
}

search.click(showFriendById)

// Borrar amigo
const inputDelete = $('#inputDelete')
const btnDelete = $('#delete')
const success = $('#success')


btnDelete.click(function(){
    const idDelete = inputDelete.val()

    if(!idDelete) return success.text('Debe llenar el campo para eliminar el amigo')
    if(isNaN(idDelete)) return success.text('Debe ingresar un ID numerico valido')

    $.ajax({
        url: `http://localhost:5000/amigos/${idDelete}`,
        type:'DELETE',
        success:()=>{
            success.text(`el amigo numero ${inputDelete} ha sido borrado con éxito`)
            getFriends();
            cleanInputs();
        }
    })
})


    

