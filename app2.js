const body = document.querySelector('body')
const baseInput = document.getElementById('base')
const limiteInput = document.getElementById('limite')
const boton = document.getElementById('button')
const contenedor = document.getElementById('contenedor')
const contenedore = document.getElementById('contenedore')

const getapi = async (base = 1, limite = 2) => {
    try {
         contenedor.classList.remove('contenedorerr')


        contenedor.innerHTML = ''

        for (base; base <= limite; base++) {

            const response = await fetch(`https://thesimpsonsapi.com/api/characters/${base}`)
            const data = await response.json();

            const { id, age, gender, name, first_appearance_ep: { image_path }, portrait_path, status } = data;

            contenedor.innerHTML += `
            <div class='contenedor2'>
            <h3 class='textoid'>${id}</h3>
            <h2 class='nombre'>${name}</h2>
            <p class='edad'> Age:${age}</P>
            <P class='genero'> Gender: ${gender}</p>
            <p class='status1'> Status: ${status}</p>
            <img src='https://cdn.thesimpsonsapi.com/200${portrait_path}' >
            </div>
            `
        

        }

    } catch (error) { 
        contenedor.textContent = error
        contenedor.classList.add('contenedorerr')
    }
}






boton.addEventListener('click', () => {

    getapi(baseInput.value, limiteInput.value)


})