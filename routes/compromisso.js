const express = require("express");
const router = express.Router();
const {
  criarCompromisso,
  obterTodosCompromissos,
  obterCompromissoPorId,
  atualizarCompromisso,
  deletarCompromisso,
} = require("../controllers/compromissos/compromissosController");

router.post("/cadastrar", criarCompromisso);

router.get("/", obterTodosCompromissos);

router.get("/:id_compromisso", obterCompromissoPorId);

router.put("/editar/:id_compromisso", atualizarCompromisso);

router.delete("/deletar/:id_compromisso", deletarCompromisso);

module.exports = router;
