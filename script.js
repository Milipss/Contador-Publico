document.querySelectorAll('.materia').forEach(materia => {
  const nombre = materia.textContent.trim();
  if (localStorage.getItem(nombre) === 'true') {
    materia.classList.add('aprobada');
  }

  materia.addEventListener('click', () => {
    materia.classList.toggle('aprobada');
    const aprobada = materia.classList.contains('aprobada');
    localStorage.setItem(nombre, aprobada);
  });
});
