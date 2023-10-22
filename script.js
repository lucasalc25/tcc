/* Armazena o estado das classes em variáveis*/
let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');

/* Função para clique no ícone buscar*/
searchBtn.onclick = function() {
  searchBox.classList.add('active');
  closeBtn.classList.add('active');
  searchBtn.classList.add('active');
}

/* Função para clique no ícone fechar*/
closeBtn.onclick = function() {
  searchBox.classList.remove('active');
  closeBtn.classList.remove('active');
  searchBtn.classList.remove('active');
}

/* Função para clique no ícone menu*/
menuToggle.onclick = function() {
  header.classList.toggle('open');
}

function login() {
  location.href = 'home_coord.html';
}


