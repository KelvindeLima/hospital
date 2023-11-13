const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const Paciente = require ('../models/Pacientes');
const app = express ();

app.use(express.json());


//Rota para cadastrar um novo paciente

router.post('/cadastrar', async (req, res) => {
    try {
        const novoPaciente = new Paciente(req.body);
        const resultado = await novoPaciente.save();
    res.status(201).json({ message: 'Paciente adicionado com sucesso!', paciente: resultado });
  } catch (error) {
    console.error('Erro ao inserir paciente: ', error.message);
    res.status(500).json({ error: 'Erro ao inserir paciente.' });
    }
});

//Rota para listar todos os pacientes

router.get('/listar', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json({ pacientes: pacientes });
  } catch (error) {
    console.error('Erro ao buscar pacientes: ', error.message);
    res.status(500).json({ error: 'Erro ao buscar pacientes.' });
  }
});

// Rota para editar as informações de um paciente

router.put('/editar/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const atualizacao = req.body;
      const resultado = await Paciente.findByIdAndUpdate(id, atualizacao, { new: true });
      res.json({ message: 'Informações do paciente atualizadas!', paciente: resultado });
    } catch (error) {
      console.error('Erro ao atualizar paciente: ', error.message);
      res.status(500).json({ error: 'Erro ao atualizar paciente.' });
    }
  });
  

//Rota para deletar as informações de uma paciente

router.delete('/remover/:id', async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      await Paciente.findOneAndDelete({_id: id});
      res.json({ message: 'Paciente removido com sucesso!' });
    } catch (error) {
      console.error('Erro ao remover paciente: ', error.message);
      res.status(500).json({ error: 'Erro ao remover paciente.' });
    }
  });

//Rota para buscar um determinado paciente

router.get('/buscarpaciente/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const paciente = await Paciente.findById(id);
      if (!paciente) {
        return res.status(404).json({ error: 'Paciente não encontrado.' });
      }
      res.json({ paciente: paciente });
    } catch (error) {
      console.error('Erro ao buscar dados do paciente: ', error.message);
      res.status(500).json({ error: 'Erro ao buscar dados do paciente.' });
    }
  });

//Rota para listar pacientes por ala

router.get('/ala/:ala', async (req, res) => {
    try {
      const ala = req.params.ala.toUpperCase();
      const pacientes = await Paciente.find({ ala: ala });
      res.json({ pacientes: pacientes });
    } catch (error) {
      console.error('Erro ao buscar pacientes por ala: ', error.message);
      res.status(500).json({ error: 'Erro ao buscar pacientes por ala.' });
    }
  });

  module.exports = router;