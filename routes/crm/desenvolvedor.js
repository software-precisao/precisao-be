const express = require("express");
const {
  getDesenvolvedores,
  getDesenvolvedorById,
  createDesenvolvedor,
  updateDesenvolvedor,
  deleteDesenvolvedor,
} = require("../../controllers/crm/desenvolvedor/desenvolvedorController");

const router = express.Router();

router.get("/", getDesenvolvedores); 
router.get("/:id_dev", getDesenvolvedorById);
router.post("/cadastrar", createDesenvolvedor); 
router.put("/editar/:id_dev", updateDesenvolvedor); 
router.delete("/deletar/:id_dev", deleteDesenvolvedor);

module.exports = router;
