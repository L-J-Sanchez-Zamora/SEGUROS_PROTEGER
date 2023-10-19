//document.addEventListener('DOMContentLoaded', function () {
//console.log('DOMContentLoaded event fired.');

//*********************** Cinco addEventListener**************************//

//* 1. Carrusel de imagenes:
'use strick'

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

// Cuando hago click en cada punto.
// Saber la posicion de cada punto .
// Aplicar transform  translateX al grande. 
// Quitar la clase activo de todos puntos. 
// Añadir la clase activo al punto que hemos hecho click.

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i
        let operacion = posicion * -33

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
});

//* 2. Botón con alerta de se guardo el formulario:

let buttonText = document.getElementById('button-text')
buttonText.addEventListener("click", clicked)
function clicked() {
    alert('Gracias la solicitud ha sido enviado, un asesor te contactará en los proximos minutos')
}

//* 3.Rastro de puntero:

document.addEventListener("mousemove",function(e){

    var rocket = document.querySelector(".rocket");
    rocket.style.left = e.offsetX+'px';
    rocket.style.top = e.offsetY+'px';
});

//* 1. Cambia el titulo <h2 id="header1">Nuestros servicios</h2>

function hiEvent (messange){
    document.getElementById("header1").textContent=messange
}
hiEvent("Conoce nuestros servicios");

//*2. Cambia el fondo <div id="header">
const myStyle1=document.getElementById("header");
myStyle1.style.backgroundColor="purple"

//*3. Cambia el texto al oprimir un boton <button id="submit"></button>

const button = document.getElementById("submit");
button.addEventListener("click", () => {
    alert("¡Acabas de presionarme!");
});

const review = document.getElementById("review");

if (review.classList.contains("done")) {
    review.style.display = "none";
    button.textContent = "ABRIR RESEÑA";
} else {
    review.classList.add("done");
    button.textContent = "CERRAR RESEÑA";
}


/*
let text = document.getElementById("text")
text.addEventListener("copy", copied)

let image = document.getElementById("image")
image.addEventListener("drag", dragovered)

var input = document.getElementById('input')
input.addEventListener("keydown", textModified)

function copied(){
    alert("Texto copiado")
}

function  dragovered(){
    alert("Movida")
}

function textModified(){
    console.log("Evento keydown detectado");
    var inputText = document.getElementById('input-text');
    inputText.innerText = input.value
}
*/