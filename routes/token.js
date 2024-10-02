const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/token/tokenController'); 
const { uploadFields } = require('../helpers/image-upload');

router.post('/cadastrar', uploadFields, tokenController.criarToken);

router.get('/', tokenController.obterTokens);

router.get('/:id_token', tokenController.obterTokenPorId);

router.put('editar/:id_token', uploadFields ,tokenController.atualizarToken);

router.delete('deletar/:id_token', tokenController.deletarToken);

module.exports = router;
