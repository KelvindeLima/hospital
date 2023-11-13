const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/Database');
const pacientesRoutes = require('./controller/Controller');

const app = express();
const port = 2000;

app.use(bodyParser.json());

app.use(express.json());

app.use('/hospital', pacientesRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  });

  app.use((req, res, next) => {
    const error = new Error('Recurso não encontrado');
    error.status = 404;
    next(error);
  });

// Iniciar o servidor
app.listen(port, () => {
  console.log('Servidor rodando');
});

