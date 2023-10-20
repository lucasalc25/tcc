function login() {
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    // Simulando autenticação
    if (cpf === '123' && senha === '1234') {
        location.href = 'home_coord.html';
    } else if (cpf === '321' && senha === '1234') {
        location.href = 'home_prof.html';
    } else {
        alert('CPF ou senha incorretos. Tente novamente.');
    }
}


