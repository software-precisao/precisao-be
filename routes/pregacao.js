const express = require("express");
const router = express.Router();
const {
  criarPregacao,
  obterTodasPregacoes,
  obterPregacaoPorId,
  atualizarPregacao,
  deletarPregacao,
} = require("../controllers/pregacao/pregacaoController");

router.post("/cadastrar", criarPregacao);

router.get("/", obterTodasPregacoes);

router.get("/:id_pregacao", obterPregacaoPorId);

router.put("/editar/:id_pregacao", atualizarPregacao);

router.delete("/deletar/:id_pregacao", deletarPregacao);

module.exports = router;
