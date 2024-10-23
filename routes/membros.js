const express = require("express");
const router = express.Router();
const membroController = require("../controllers/membros/membrosController");

router.post("/cadastrar", membroController.criarMembro);
router.get("/:id_membro", membroController.obterMembroPorId);
router.get("/", membroController.listarMembros);
router.put("/editar/:id_membro", membroController.atualizarMembro);
router.delete("/deletar/:id_membro", membroController.deletarMembro);

module.exports = router;
