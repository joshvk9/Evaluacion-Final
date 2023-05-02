// Obtener la tabla
const table = document.querySelector("#alumnos-table tbody");

// Array de objetos con los datos de los alumnos
const alumnos = [
  {
    nombre: "Alumno 1",
    grado: "6to",
    maestro: "Maestro 1",
    materia: "Matemáticas",
    contesto: true,
  },
  {
    nombre: "Alumno 2",
    grado: "8vo",
    maestro: "Maestro 2",
    materia: "Ciencias",
    contesto: false,
  },
  {
    nombre: "Alumno 3",
    grado: "9no",
    maestro: "Maestro 3",
    materia: "Historia",
    contesto: true,
  },
  // ... y así sucesivamente con los demás alumnos
];

// Recorrer el array de alumnos y agregar una fila por cada uno a la tabla
alumnos.forEach((alumno) => {
  const row = table.insertRow();
  row.insertCell().textContent = alumno.nombre;
  row.insertCell().textContent = alumno.grado;
  row.insertCell().textContent = alumno.maestro;
  row.insertCell().textContent = alumno.materia;
  row.insertCell().textContent = alumno.contesto ? "Sí" : "No";
});

// Borrar alumno
const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", () => {
  const selectedRow = document.querySelector("tr.selected");
  if (selectedRow) {
    selectedRow.remove();
  } else {
    alert("Selecciona un alumno para borrar.");
  }
});

// Acomodar alumnos por contestación
const sortBtn = document.querySelector("#sort-btn");
sortBtn.addEventListener("click", () => {
  const rows = Array.from(document.querySelectorAll("#alumnos-table tbody tr"));
  const sortedRows = rows.sort((a, b) => {
    const aContesto = a.querySelector("td:nth-child(5)").textContent;
    const bContesto = b.querySelector("td:nth-child(5)").textContent;
    if (aContesto === "Sí" && bContesto === "No") {
      return -1;
    } else if (aContesto === "No" && bContesto === "Sí") {
      return 1;
    } else {
      return 0;
    }
  });
  const tableBody = document.querySelector("#alumnos-table tbody");
  tableBody.innerHTML = "";
  sortedRows.forEach((row) => {
    tableBody.appendChild(row);
  });
});

const encuestaInputs = document.querySelectorAll(".encuesta");
encuestaInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const fila = input.parentNode.parentNode;
    if (input.checked) {
      fila.classList.add("completado");
      tabla.querySelector("tbody").appendChild(fila);
    } else {
      fila.classList.remove("completado");
      tabla.querySelector("tbody").prepend(fila);
    }
  });
});

const eliminarBotones = document.querySelectorAll(".eliminar");
eliminarBotones.forEach((boton) => {
  boton.addEventListener("click", () => {
    boton.parentNode.parentNode.remove();
  });
});

const btnContestadas = document.querySelector("#btn-contestadas");
const btnNoContestadas = document.querySelector("#btn-no-contestadas");
const filas = document.querySelectorAll("tbody tr");

btnContestadas.addEventListener("click", () => {
  filas.forEach((fila) => {
    if (fila.querySelector("td:nth-child(5)").textContent === "Sí") {
      fila.classList.add("contestada");
    } else {
      fila.classList.remove("contestada");
    }
  });
});

btnNoContestadas.addEventListener("click", () => {
  filas.forEach((fila) => {
    if (fila.querySelector("td:nth-child(5)").textContent === "No") {
      fila.classList.add("contestada");
    } else {
      fila.classList.remove("contestada");
    }
  });
});

function marcarContestado(boton) {
  if (boton.innerText === "Sí") {
    boton.innerText = "No";
    boton.classList.remove("si");
    boton.classList.add("no");
  } else {
    boton.innerText = "Sí";
    boton.classList.remove("no");
    boton.classList.add("si");
  }
}

logoutBtn.addEventListener("click", () => {
  // Aquí puedes agregar el código para cerrar la sesión
  // ...

  // Redirige al usuario al menú principal
  window.location.href = "inicio.html";
});
