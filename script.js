document.querySelectorAll('.materia').forEach(materia => {
  // cargar estado
  const nombre = materia.textContent.trim();
  if (localStorage.getItem(nombre) === 'true') {
    materia.classList.add('aprobada');
  }

  // al hacer clic
  materia.addEventListener('click', () => {
    materia.classList.toggle('aprobada');
    const aprobada = materia.classList.contains('aprobada');
    localStorage.setItem(nombre, aprobada);
  });
});

