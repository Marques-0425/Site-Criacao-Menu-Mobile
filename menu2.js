const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const secao1 = document.querySelector('gradient-box');

hamburguer.addEventListener('click', () => 
	nav.classList.toggle("active"));

hamburguer.addEventListener('click', () => 
	hamburguer.classList.toggle("active"));

hamburguer.addEventListener('click', () => 
	logo.classList.toggle("blur"));
