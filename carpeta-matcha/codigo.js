// ==========================================
// 1. MARCAR UTENSILIOS COMO LISTOS
// ==========================================
// Seleccionamos todos los elementos <li> dentro de la lista de utensilios
const utensilios = document.querySelectorAll('.lista-utensilios li');

// Le agregamos un evento 'click' a cada uno
utensilios.forEach((item) => {
  item.addEventListener('click', () => {
    // Alterna la clase CSS 'completado'
    item.classList.toggle('completado');
  });
});

// ==========================================
// 2. MODO CLARO / OSCURO
// ==========================================
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
  // Alterna la clase 'modo-oscuro' en la etiqueta <body>
  document.body.classList.toggle('modo-oscuro');

  // Cambia el texto del botón según el modo activo
  if (document.body.classList.contains('modo-oscuro')) {
    btnTema.textContent = '☀️ Modo Claro';
  } else {
    btnTema.textContent = '🌙 Modo Oscuro';
  }
});

// ==========================================
// 3. TEMPORIZADOR PARA BATIR MATCHA (15 seg)
// ==========================================
const btnTimer = document.getElementById('btn-timer');
const pantallaTiempo = document.getElementById('pantalla-tiempo');
let tiempoRestante = 15;
let intervalo = null;

btnTimer.addEventListener('click', () => {
  // Si ya se estaba ejecutando, no hace nada nuevo
  if (intervalo !== null) return;

  tiempoRestante = 15;
  pantallaTiempo.textContent = `${tiempoRestante}s`;
  btnTimer.disabled = true;
  btnTimer.textContent = 'Batiendo... 🥣';

  // Ejecuta la función cada 1 segundo (1000ms)
  intervalo = setInterval(() => {
    tiempoRestante--;
    pantallaTiempo.textContent = `${tiempoRestante}s`;

    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      intervalo = null;
      pantallaTiempo.textContent = '¡Espuma Lista! ✨';
      btnTimer.disabled = false;
      btnTimer.textContent = '▶ Empezar a Batir';
    }
  }, 1000);
});