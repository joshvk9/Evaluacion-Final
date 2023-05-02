// Define variables globales
let preguntas = []; // Array para almacenar las preguntas
let preguntasContenedor = document.getElementById("preguntas-contenedor"); // Contenedor donde se mostrarán las preguntas
let nuevaPreguntaFormulario = document.getElementById("nueva-pregunta-formulario"); // Formulario para agregar nuevas preguntas
let nuevaPreguntaBoton = document.getElementById("nueva-pregunta-boton"); // Botón para agregar una nueva pregunta
let opcionesContenedor = document.getElementById("opciones-contenedor"); // Contenedor donde se mostrarán las opciones de una pregunta seleccionada
let nuevaOpcionFormulario = document.getElementById("nueva-opcion-formulario"); // Formulario para agregar nuevas opciones
let nuevaOpcionBoton = document.getElementById("nueva-opcion-boton"); // Botón para agregar una nueva opción
let guardarPreguntasBoton = document.getElementById("guardar-preguntas-boton"); // Botón para guardar las preguntas en el localStorage
let borrarPreguntasBoton = document.getElementById("borrar-preguntas-boton"); // Botón para borrar todas las preguntas almacenadas en el localStorage

// Agregar evento al botón de nueva pregunta
nuevaPreguntaBoton.addEventListener("click", agregarNuevaPregunta);

// Función para agregar una nueva pregunta al array de preguntas
function agregarNuevaPregunta() {
  // Obtener los valores de los inputs del formulario
  let preguntaInput = document.getElementById("pregunta-input").value;
  let tipoInput = document.getElementById("tipo-input").value;

  // Crear un objeto para almacenar la nueva pregunta y sus opciones
  let nuevaPregunta = {
    pregunta: preguntaInput,
    tipo: tipoInput,
    opciones: []
  };

  // Agregar la nueva pregunta al array de preguntas
  preguntas.push(nuevaPregunta);

  // Limpiar el formulario de nueva pregunta
  nuevaPreguntaFormulario.reset();

  // Actualizar la vista de las preguntas
  mostrarPreguntas();
}

// Función para mostrar las preguntas en el contenedor correspondiente
function mostrarPreguntas() {
  // Limpiar el contenedor de preguntas
  preguntasContenedor.innerHTML = "";

  // Recorrer el array de preguntas y crear un elemento HTML para cada una
  preguntas.forEach((pregunta, index) => {
    let preguntaElemento = document.createElement("div");
    preguntaElemento.classList.add("pregunta");
    preguntaElemento.innerHTML = `
      <h3>${pregunta.pregunta}</h3>
      <p>${pregunta.tipo}</p>
      <button onclick="borrarPregunta(${index})">Borrar</button>
      <button onclick="mostrarOpciones(${index})">Mostrar opciones</button>
    `;

    // Agregar el elemento HTML al contenedor de preguntas
    preguntasContenedor.appendChild(preguntaElemento);
  });
}

// Función para borrar una pregunta del array de preguntas
function borrarPregunta(index) {
  preguntas.splice(index, 1);
  mostrarPreguntas();
}

// Función para mostrar las opciones de una pregunta seleccionada
function mostrarOpciones(index) {
  // Obtener la pregunta seleccionada
  let pregunta = preguntas[index];

  // Limpiar el contenedor de opciones
  opcionesContenedor.innerHTML = "";

  // Recorrer las opciones de la pregunta y crear un elemento HTML para cada una
  pregunta.opc


  // Arreglo para almacenar las preguntas
let preguntas = [];

// Función para agregar una pregunta al arreglo
function agregarPregunta(pregunta, tipoRespuesta, respuestas) {
  preguntas.push({
    pregunta: pregunta,
    tipoRespuesta: tipoRespuesta,
    respuestas: respuestas
  });
}

// Función para mostrar las preguntas en la página
function mostrarPreguntas() {
  let listaPreguntas = document.getElementById("lista-preguntas");
  listaPreguntas.innerHTML = "";
  
  preguntas.forEach(function(pregunta, indice) {
    let li = document.createElement("li");
    li.innerHTML = pregunta.pregunta;
    
    let botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.addEventListener("click", function() {
      preguntas.splice(indice, 1);
      mostrarPreguntas();
    });
    
    li.appendChild(botonBorrar);
    
    listaPreguntas.appendChild(li);
  });
}

// Función para manejar el evento de envío del formulario
function enviarFormulario(event) {
  event.preventDefault();
  
  let pregunta = document.getElementById("pregunta").value;
  let tipoRespuesta = document.getElementById("tipo-respuesta").value;
  let respuestas = document.getElementById("respuestas").value.split(",");
  
  agregarPregunta(pregunta, tipoRespuesta, respuestas);
  mostrarPreguntas();
  
  // Limpiar los campos del formulario
  document.getElementById("pregunta").value = "";
  document.getElementById("tipo-respuesta").value = "";
  document.getElementById("respuestas").value = "";
}

// Manejar el evento de envío del formulario
document.getElementById("formulario").addEventListener("submit", enviarFormulario);}

