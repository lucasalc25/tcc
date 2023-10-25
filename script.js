/* Armazena o estado das classes em variáveis*/
const nav = document.querySelector('.nav');
const body = document.querySelector('.content');

  searchIcon = document.querySelector('#searchIcon'),
  navOpenBtn = document.querySelector('.navOpenBtn'),
  navCloseBtn = document.querySelector('.navCloseBtn');

  searchIcon.addEventListener("click", () => {
    body.classList.toggle("bodyDown");
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if(nav.classList.contains("openSearch")) {
      return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
  });

  navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
  });

  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
  })


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
  navbar.classList.toggle('open');
}

function login() {
  const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    
  if (cpf == "12345" && senha == "123.") {
    location.href = 'home_coord.html';
  } else if (cpf == "54321" && senha == "123.") {
    location.href = 'home_professor.html';
  } else {
    alert("CPF ou Senha incorretos. Tente novamente!");
  }
}


