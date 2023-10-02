//document.addEventListener('DOMContentLoaded', function () {
//console.log('DOMContentLoaded event fired.');
'use strick'

const grande = document.querySelector('.grande');
const carrousel = document.querySelectorAll('.punto');

//Cunado hago click en cada punto
//saber la posicion de cada punto 
//aplicar transform  translateX al grande 
//quitar la clase activo de todos puntos 
//añadir la clase activo al punto que hemos hecho click

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i
        let operacion = posicion * -50

        grande.style.transform =`translateX(${operacion}%)`

        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
});

