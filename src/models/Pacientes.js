const mongoose = require('mongoose');
const express = require('express');


const pacienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  ala: {
    type: String,
    enum: ['A', 'B'],
    required: true,
  },
  quarto: {
    type: Number,
    min: 1,
    max: 9,
    required: true,
  },
});
const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;