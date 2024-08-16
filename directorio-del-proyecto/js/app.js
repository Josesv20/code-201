"use strict";
/*
window.onload = function() {
    // Solicita el nombre del usuario y personaliza el saludo
    let nombreUsuario = prompt("¿Cuál es tu nombre my king?");
    document.getElementById("saludo").textContent = `¡Hola, ${nombreUsuario}! Welcome to about me😎.`;

    // Función para realizar las preguntas
    function realizarPreguntas() {
        let puntaje = 0;

        // Pregunta 1
        let respuesta1 = prompt("¿Estudié en la Universidad San Martin de Porres? (si/no)").toLowerCase();
        if (respuesta1 === "si") {
            puntaje++;
            alert("¡Correcto!, empiezas bien👍");
        } else {
            alert("Incorrecto. comenzamos mal causa👎");
        }

        // Pregunta 2
        let respuesta2 = prompt("¿Me apasionan los deportes? (si/no)").toLowerCase();
        if (respuesta2 === "si") {
            puntaje++;
            alert("¡Correcto!, el futbol es lo que mas difruto⚽");
        } else {
            alert("Incorrecto, estare gordito pero si me gusta jugar jajaja😂");
        }

        // Pregunta 3
        let respuesta3 = prompt("¿He viajado a Japon? (si/no)").toLowerCase();
        if (respuesta3 === "no") {
            puntaje++;
            alert("¡Correcto!, Manifestando!✈️");
        } else {
            alert("Incorrecto. pipipi😢");
        }

        // Pregunta 4
        let respuesta4 = prompt("¿Disfruto de los videojuegos? (si/no)").toLowerCase();
        if (respuesta4 === "si") {
            puntaje++;
            alert("¡Exacto!🎮");
        } else {
            alert("Error404❌");
        }

        // Pregunta 5
        let respuesta5 = prompt("¿Me gusta la pizza con piña? (si/no)").toLowerCase();
        if (respuesta5 === "no") {
            puntaje++;
            alert("¡Correcto!, lo siento pero no la soporto😢");
        } else {
            alert("Incorrecto, prefiero con carne o champiñes😋");
        }

        // Pregunta 6: Adivinanza de número
        let numeroCorrecto = 20; // El número correcto puede ser cualquier valor
        for (let i = 0; i < 4; i++) {
            let respuesta6 = parseInt(prompt("Adivina el número que tengo en mente🧠 (entre 1 y 100):"));
            if (respuesta6 === numeroCorrecto) {
                puntaje++;
                alert("¡Correcto!");
                break;
            } else if (respuesta6 > numeroCorrecto) {
                alert("Demasiado alto.");
            } else {
                alert("Demasiado bajo.");
            }
        }

        // Pregunta 7: Varias respuestas correctas
        let respuestasCorrectas = ["jugar", "leer", "programar", "comer", "viajar"];
        let respuesta7Correcta = false;
        for (let i = 0; i < 6; i++) {
            let respuesta7 = prompt("¿Cuales son mis hobbies favoritos con los que paso el tiempo?").toLowerCase();
            if (respuestasCorrectas.includes(respuesta7)) {
                puntaje++;
                alert("¡Correcto!");
                respuesta7Correcta = true;
                break;
            } else {
                alert("Incorrecto.");
            }
        }
        if (!respuesta7Correcta) {
            alert(`Mis hobbies favoritos eran: ${respuestasCorrectas.join(", ")}`);
        }

        // Mensaje final
        alert(`${nombreUsuario}, has respondido correctamente ${puntaje} de 7 preguntas.`);
    }

    // Llama a la función para iniciar el juego
    realizarPreguntas();
};*/

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