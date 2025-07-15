function actualizarContador() {
  const totalAprobadas = document.querySelectorAll('.materia.aprobada').length;
  document.getElementById('contadorAprobadas').textContent = totalAprobadas;
}

document.querySelectorAll('.materia').forEach(materia => {
  const nombre = materia.textContent.trim();

  // Cargar estado guardado
  if (localStorage.getItem(nombre) === 'true') {
    materia.classList.add('aprobada');
  }

  // Al hacer clic
  materia.addEventListener('click', () => {
    materia.classList.toggle('aprobada');
    const aprobada = materia.classList.contains('aprobada');
    localStorage.setItem(nombre, aprobada);
    actualizarContador();
  });
});

// Inicializar contador al cargar
actualizarContador();
