// Obtener la ventana modal y el botón para abrirlo
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");

// Obtener el botón de cierre de la ventana modal
const closeBtn = document.getElementsByClassName("close")[0];

// Función para abrir la ventana modal cuando se haga clic en el botón
btn.onclick = function () {
  modal.style.display = "block";
};

// Función para cerrar la ventana modal cuando se haga clic en el botón de cierre
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Función para cerrar la ventana modal cuando se haga clic fuera de ella
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
