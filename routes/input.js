const express = require('express');
const router = express.Router();
const {
  criarInput,
  obterInputs,
  obterInputPorId,
  atualizarInput,
  deletarInput
} = require('../controllers/input/inputController');

// Rota para criar um novo input
router.post('/cadastrar', criarInput);

// Rota para obter todos os inputs
router.get('/', obterInputs);

// Rota para obter um input por ID
router.get('/:id_input', obterInputPorId);

// Rota para atualizar um input por ID
router.put('/editar/:id_input', atualizarInput);

// Rota para deletar um input por ID
router.delete('/deletar/:id_input', deletarInput);

module.exports = router;