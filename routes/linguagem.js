const express = require("express");
const router = express.Router();

const linguagemController = require("../controllers/linguagem/linguagemController");

router.post("/cadastrar", linguagemController.criarLinguagem);

router.get("/", linguagemController.obterLinguagens);

router.get("/:id_linguagem", linguagemController.obterLinguagemPorId);

router.put("/editar/:id_linguagem", linguagemController.atualizarLinguagem);

router.delete("/deletar/:id_linguagem", linguagemController.deletarLinguagem);

module.exports = router;
