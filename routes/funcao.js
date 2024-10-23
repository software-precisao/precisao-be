const express = require("express");
const router = express.Router();
const {
  getFuncoes,
  getFuncaoById,
  createFuncao,
  updateFuncao,
  deleteFuncao,
} = require("../controllers/funcao/funcaoController");

router.get("/", getFuncoes);

router.get("/:id_funcao", getFuncaoById);

router.post("/cadastrar", createFuncao);

router.put("/editar/:id_funcao", updateFuncao);

router.delete("/deletar/:id_funcao", deleteFuncao);

module.exports = router;
