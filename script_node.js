const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados!');
});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, cpf: req.body.cpf, email: req.body.email, password: hashedPassword };
    db.query('INSERT INTO users SET ?', user, (err, result) => {
      if (err) throw err;
      res.send('Usuário cadastrado com sucesso!');
    });
  } catch {
    res.send('Erro ao cadastrar o usuário.');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});