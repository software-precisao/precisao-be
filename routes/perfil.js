const express = require('express');
const router = express.Router();
const { uploadFields } = require("../helpers/image-upload");


const {
  updatePerfilIgreja,
  updateLogo
} = require('../controllers/perfil/perfilChurchController');

// Rota para atualizar o perfil da igreja
router.put('/:id_perfil_igreja', updatePerfilIgreja);

// Rota para atualizar a logo da igreja
router.put('/logo-igreja/:id_perfil_igreja', uploadFields, updateLogo);

module.exports = router;