"use strict";
let puntos = 0;
let usuario = prompt("Hola; ¿ Cual es tu nombre/apodo ?");
alert('Bienvenido, mucho gusto ' + usuario);
console.log(usuario);

function preguntaLugarEstudio() {
    const respuesta1 = "Si";
    const pregunta1 = prompt('¿Estudié en la Universidad San Martin de Porres? (si/no)');
    if (respuesta1.toLowerCase() == pregunta1.toLowerCase()) {
        alert('Correcto');
        puntos++;
    } else {
        alert('Incorrecto');
    }
}
function preguntaDeportes() {
    const respuesta2 = "Si";
    const pregunta2 = prompt('¿Me apasionan los deportes? (si/no)');
    if (respuesta2.toLowerCase() == pregunta2.toLowerCase()) {
        alert('Correcto, el futbol es lo que mas difruto⚽');
        puntos++;
    } else {
        alert('Incorrecto,😂');
    }
}
function preguntaViajar() {
    const respuesta3 = "No";
    const pregunta3 = prompt('¿He viajado a Japon? (si/no)');
    if (respuesta3.toLowerCase() == pregunta3.toLowerCase()) {
        alert('Correcto');
        puntos++;
    } else {
        alert('Incorrecto');
    }
}
function preguntaVideoJuego() {
    const respuesta4 = "Si";
    const pregunta4 = prompt('¿Disfruto de los videojuegos? (si/no)');
    if (respuesta4.toLowerCase() == pregunta4.toLowerCase()) {
        alert('Correcto 🎮');
        puntos++;
    } else {
        alert('Incorrecto ❌');
    }
}
function preguntaGustarComida() {
    const respuesta5 = "No";
    const pregunta5 = prompt('¿Me gusta la pizza con piña? (si/no)');
    if (respuesta5.toLowerCase() == pregunta5.toLowerCase()) {
        alert('Correcto, no la soporto😢');
        puntos++;
    } else {
        alert('Incorrecto ❌, prefiero con carne o champiñes😋');
    }
}
preguntaLugarEstudio();
preguntaDeportes();
preguntaViajar();
preguntaVideoJuego();
preguntaGustarComida();

alert (usuario+" Gracias por participar. Ud. tiene un Total de :  "+ puntos+"  Repuestas correctas");