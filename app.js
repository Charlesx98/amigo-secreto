// Auí se presenta el código para mi juego de amigo secreto
// Array para almacenar los nombres de los amigos ingresados por el usuario
let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 * Se activa al hacer clic en el botón "Añadir".
 */
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim(); // .trim() para eliminar espacios en blanco al inicio/final

    // Valida si el campo de texto está vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

     // Agrega el nombre del amigo al array 'amigos'
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
    actualizarListaAmigos();
}

/**
 * Función para actualizar la lista de amigos mostrada en la interfaz.
 * Recorre el array 'amigos' y renderiza cada nombre como un elemento de lista.
 */
function actualizarListaAmigos() { // Obtiene el elemento HTML (<ul>) con id "listaAmigos"
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista existente

    // Itera sobre cada nombre en el array 'amigos'
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
}

/**
 * Función para realizar el sorteo aleatorio de un amigo.
 * Se activa al hacer clic en el botón "Sortear amigo".
 */
function sortearAmigo() { // Obtiene el elemento HTML (<ul>) con id "resultado" donde se mostrará el amigo sorteado
    let resultadoElemento = document.getElementById('resultado');

    // Valida si no hay amigos en la lista
    if (amigos.length === 0) {
        resultadoElemento.innerHTML = '<li>No hay amigos para sortear. Agrega algunos nombres primero.</li>';
        return;
    }

    // Valida si solo hay un amigo en la lista
    if (amigos.length === 1) {
        resultadoElemento.innerHTML = `<li>¡${amigos[0]} es el único amigo en la lista!</li>`;
        return;
    }

    // Genera un índice aleatorio dentro del rango del array 'amigos'
    // Math.random() devuelve un número flotante entre 0 (inclusive) y 1 (exclusivo)
    // Se multiplica por la longitud del array para obtener un rango adecuado
    // Math.floor() redondea el número hacia abajo para obtener un índice entero
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtiene el nombre del amigo utilizando el índice aleatorio generado
    let amigoSorteado = amigos[indiceAleatorio];

    // Actualiza el contenido del elemento de resultado para mostrar el amigo sorteado
    resultadoElemento.innerHTML = `<li>¡El amigo secreto es: **${amigoSorteado}**!</li>`;
}