require("dotenv").config();
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/loginController");
const userController = require("../controllers/auth/recoveryController");

router.post("/", authController.autenticarUsuario);
router.post('/verifica-email', userController.obterUsuarioPorEmail);
router.put('/edit/trocar-senha', userController.alterarSenha);
router.post('/valida-code', userController.validaCode);

module.exports = router;