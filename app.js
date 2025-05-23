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


















