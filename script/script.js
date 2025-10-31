const carta = document.getElementById("carta");
const mensaje = document.getElementById("mensaje");

carta.addEventListener("click", () => {
  carta.style.display = "none";
  mensaje.style.display = "block";
});

function cerrarCarta() {
  mensaje.style.display = "none";
  carta.style.display = "block";
}

