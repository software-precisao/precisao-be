const express = require("express");
const router = express.Router();
const {
  criarFunil,
  obterFunis,
  obterFunilPorId,
  atualizarFunil,
  deletarFunil,
} = require("../../controllers/crm/funil/funilController");

router.post("/cadastrar", criarFunil);

router.get("/", obterFunis);

router.get("/:id_funil", obterFunilPorId);

router.put("/editar/:id_funil", atualizarFunil);

router.delete("/deletar/:id_funil", deletarFunil);

module.exports = router;
