document.addEventListener("DOMContentLoaded", () => {
const toggleBtn = document.getElementById('theme-toggle');
  const mensaje = document.getElementById("mensaje");
  const hora = document.getElementById("hora");

  // Cambiar tema
  toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
  // Función saludo
  window.saludar = function () {
    if (mensaje) {
      mensaje.textContent = "¡Hola, estás aprendiendo JavaScript!";
    }
  };

  // Función mostrar hora
  window.mostrarHora = function () {
    if (hora) {
      const ahora = new Date();
      hora.textContent = `Hora actual: ${ahora.toLocaleTimeString()}`;
    }
  };
});
