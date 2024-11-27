const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

hamburguer.addEventListener('click', () => 
	nav.classList.toggle("active"));

hamburguer.addEventListener('click', () => 
	hamburguer.classList.toggle("active"));