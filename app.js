const body= document.querySelector('body')   //,size
let contenedor= document.getElementById('container')
let contenedor3= document.getElementById('container3')

document.getElementById('pixelfoto')

const theSimpsonsapi = async (personaje = 1 ) => {

const response = await fetch(`https://thesimpsonsapi.com/api/characters/${personaje}`);

const data = await response.json();

const { id,age,birthdate,gender,name,occupation,phrases,portrait_path,status,first_appearance_ep:{image_path},description}= data;






contenedor.innerHTML = `
<div class='contenedor2'>
<h2 class='text'> ${name} </h2>
<h3 class='id2'>character number: ${id}</h3>
<h2 class='ocupation'> Ocupation:${occupation}<h2>
<p class='gender'> Gender: ${gender}</p>
<p class='age2'>Age:${age}</p>
<p class='birthdate'> Birthdate: ${birthdate}</p>
<img src='https://cdn.thesimpsonsapi.com/${200}${portrait_path}'>
<p class='status1'> ${status}<p>

<div>
`
contenedor3.innerHTML=`
<div class='contenedor4'
<p class='sai'><h1>famous quotes:</h1> ${phrases}<p>
<p class= 'description1'><h1> His story </h1>${description}<p>

<div>
`



}



theSimpsonsapi()

let buscarp1 = document.getElementById('bucarp')

let button1 = document.createElement('button')

body.append(button1)

button1.textContent= 'HAY CARAMBA'

button1.classList.add("boton-dinamico")

button1.addEventListener('click', () => {

theSimpsonsapi(buscarp1.value)





})




container5.innerhtml = `
<div class='contenedor6'
<p class='textode6'> los sinson </p>
<p class='dato1'>${buscarp1.value}</p>
<p class='dato2'>${button1.textContent}<p>
</div>
`


