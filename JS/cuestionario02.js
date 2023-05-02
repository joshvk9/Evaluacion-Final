const teacherSelect = document.getElementById("teacher-select");
const semesterSelect = document.getElementById("semester-select");
const subjectSelect = document.getElementById("subject-select");
const resultContainer = document.querySelector(".result-container");

function showResult() {
  const teacher = teacherSelect.value;
  const semester = semesterSelect.value;
  const subject = subjectSelect.value;

  if (teacher && semester && subject) {
    resultContainer.innerHTML = `<p>Has seleccionado al profesor ${teacher}, en el cuatrimestre ${semester}, para la materia de ${subject}.</p>`;
  } else {
    resultContainer.innerHTML = "<p>No has seleccionado nada aún.</p>";
  }
}

teacherSelect.addEventListener("change", showResult);
semesterSelect.addEventListener("change", showResult);
subjectSelect.addEventListener("change", showResult);

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
  // Aquí puedes agregar el código para cerrar la sesión
  // ...

  // Redirige al usuario al menú principal
  window.location.href = "inicio.html";
});

// Obtener el formulario y los elementos del DOM
const formulario = document.querySelector("form");
const botonEnviar = document.querySelector('button[type="submit"]');
const mensajeEnviado = document.querySelector("#mensaje-enviado");
const errorMessage = document.querySelector("#error-message");

// Validar que todos los campos requeridos estén llenos antes de enviar el formulario
function validarFormulario(evento) {
  evento.preventDefault();

  let valido = true;

  // Validar campos requeridos
  const camposRequeridos = document.querySelectorAll("[required]");

  camposRequeridos.forEach(function (campo) {
    if (!campo.value) {
      valido = false;
      mostrarMensajeError(`${campo.name} es requerido`);
    }
  });

  // Validar correo electrónico
  const emailInput = document.querySelector('input[type="email"]');

  if (emailInput.value && !validarEmail(emailInput.value)) {
    valido = false;
    mostrarMensajeError("Correo electrónico inválido");
  }

  // Enviar formulario si es válido
  if (valido) {
    enviarFormulario();
  }
}

// Validar correo electrónico utilizando una expresión regular
function validarEmail(email) {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(email);
}

// Mostrar mensajes de error
function mostrarMensajeError(mensaje) {
  errorMessage.textContent = mensaje;
  errorMessage.style.display = "block";
}

// Enviar formulario mediante una solicitud HTTP POST
function enviarFormulario() {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        mensajeEnviado.style.display = "block";
        formulario.reset();
      } else {
        mostrarMensajeError(
          "Error al enviar formulario. Inténtalo de nuevo más tarde."
        );
      }
    }
  };

  httpRequest.open("POST", formulario.action);
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  httpRequest.send(new FormData(formulario));
}

// Escuchar evento de envío del formulario
formulario.addEventListener("submit", validarFormulario);

// Manejo del envío del formulario
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Validar que todas las preguntas han sido contestadas
  if (!validarFormulario()) {
    alert("Por favor contesta todas las preguntas.");
    return;
  }
  // Enviar formulario
  enviarFormulario();
});

// Validar que todas las preguntas han sido contestadas
function validarFormulario() {
  var preguntasAbiertas = document.querySelectorAll("textarea[required]");
  for (var i = 0; i < preguntasAbiertas.length; i++) {
    if (preguntasAbiertas[i].value.trim() === "") {
      return false;
    }
  }
  return true;
}

// Enviar formulario
function enviarFormulario() {
  // Simular envío del formulario
  setTimeout(function () {
    // Mostrar mensaje de enviado
    document.querySelector("#enviado").style.display = "block";
    // Limpiar formulario
    document.querySelector("form").reset();
  }, 2000);
}
