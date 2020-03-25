const express = require('express')

const app = express();

app.post('/users', (req, res) => {
  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Natália de Azevedo'
  });
});

app.listen(3333);
