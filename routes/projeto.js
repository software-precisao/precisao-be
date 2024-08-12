const express = require('express');
const router = express.Router();
const {
  criarProjeto,
  obterProjetos,
  obterProjetoPorId,
  atualizarProjeto,
  deletarProjeto,
} = require('../controllers/project/projetoController');

// Rota para criar um novo projeto
router.post('/cadastrar', criarProjeto);

// Rota para obter todos os projetos
router.get('/', obterProjetos);

// Rota para obter um projeto por ID
router.get('/:id_projeto', obterProjetoPorId);

// Rota para atualizar um projeto por ID
router.put('/editar/:id_projeto', atualizarProjeto);

// Rota para deletar um projeto por ID
router.delete('/deletar/:id_projeto', deletarProjeto);

module.exports = router;