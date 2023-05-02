// Selecciona todas las celdas de puntuación
const cells = document.querySelectorAll("td:nth-child(3)");

// Calcula el promedio de las puntuaciones
const scores = Array.from(cells).map(cell => parseFloat(cell.textContent));
const average = scores.reduce((total, score) => total + score) / scores.length;

// Agrega un evento clic a cada celda de puntuación
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    alert(`El promedio de puntuación en esta materia es: ${average}`);
  });
});



// Función para eliminar un maestro de la tabla
function eliminarMaestro(id) {
  // Buscamos el elemento con el atributo data-id igual a id
  const maestro = document.querySelector(`[data-id="${id}"]`).parentNode.parentNode;
  // Eliminamos el elemento de la tabla
  maestro.parentNode.removeChild(maestro);
}

// Evento click para los botones de eliminar
document.querySelectorAll('.eliminar-maestro').forEach((boton) => {
  boton.addEventListener('click', (event) => {
    // Obtenemos el id del maestro
    const idMaestro = event.target.dataset.id;
    // Llamamos a la función para eliminar el maestro de la tabla
    eliminarMaestro(idMaestro);
  });
});


const tabla = document.getElementById('tabla-evaluacion');
const btnAgrupar = document.getElementById('btn-agrupar');

function agruparTabla() {
  const filas = Array.from(tabla.rows);
  filas.shift(); // eliminamos la fila de encabezado
  const agrupado = {};

  filas.forEach(fila => {
    const maestro = fila.cells[0].textContent;
  })
}
