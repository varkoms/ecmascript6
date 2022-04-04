// ES11

// Dynamic Import
// Importacion de modulos de forma dinamica

const button = document.getElementById('btn');

button.addEventListener('click', async function() {
  const module = await import("./file.js");
  module.hello();
});