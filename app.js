// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y 
determinar quién es el "amigo secreto".
El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y 
al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/
/*let amigos= []

function agregarAmigo(){
    const input = document.getElementById('amigo')
}*/

/*const inputAmigo = document.getElementById("amigo");
const listaAmigos= [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado")
function agregarAmigo(){
    if (inputAmigo.value == ""){
        alert('ingrese un nombre valido')
    }
    console.log("pablo")
    listaAmigos.push(inputAmigo.value)
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}<li>`

}
function sortearAmigo(){
    const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceGanador];
    ulResultado.innerHTML= `<li>El amigo secreto es : ${amigoSecreto}}<li>`

}*/




const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert('Ingrese un nombre válido');
        return;
    }
    listaAmigos.push(nombre);
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
    inputAmigo.value = ""; // Limpia el campo de entrada
    inputAmigo.focus(); // Devuelve el foco al input
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear');
        return;
    }
    const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceGanador];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    listaAmigos.length = 0; // Vacía la lista de amigos
    ulListaAmigos.innerHTML = ""; // Borra el listado de amigos
}


















/*
// Array para almacenar los nombres
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación de entrada
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    // Agregar nombre al array y limpiar el input
    amigos.push(nombre);
    input.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista para evitar duplicados

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos nombres para sortear.");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const nombreGanador = amigos[indiceGanador];

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreGanador}</strong> 🎉</li>`;
}*/
