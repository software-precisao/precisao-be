const express = require("express");
const router = express.Router();
const {
  criarPatrimonio,
  obterTodosPatrimonios,
  obterPatrimonioPorId,
  atualizarPatrimonio,
  deletarPatrimonio,
} = require("../controllers/controlePatrimonio/controlePatrimonio");

router.post("/cadastrar", criarPatrimonio);

router.get("/", obterTodosPatrimonios);

router.get("/:id_patrimonio", obterPatrimonioPorId);

router.put("/editar/:id_patrimonio", atualizarPatrimonio);

router.delete("/deletar/:id_patrimonio", deletarPatrimonio);

module.exports = router;
