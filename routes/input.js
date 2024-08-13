const express = require('express');
const router = express.Router();
const {
  criarInput,
  obterInputs,
  obterInputPorId,
  atualizarInput,
  deletarInput
} = require('../controllers/input/inputController');

/**
 * @swagger
 * /input:
 *   get:
 *     summary: Obtém todos os inputs
 *     tags: [Inputs]
 *     responses:
 *       200:
 *         description: Lista de inputs retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', obterInputs);

/**
 * @swagger
 * /input/{id_input}:
 *   get:
 *     summary: Obtém um input pelo ID
 *     tags: [Inputs]
 *     parameters:
 *       - in: path
 *         name: id_input
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do input
 *     responses:
 *       200:
 *         description: Input retornado com sucesso
 *       404:
 *         description: Input não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id_input', obterInputPorId);

/**
 * @swagger
 * /input/cadastrar:
 *   post:
 *     summary: Cria um novo input
 *     tags: [Inputs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_input:
 *                 type: string
 *                 example: "Email"
 *               type:
 *                 type: string
 *                 example: "text"
 *               input:
 *                 type: text
 *                 example: "Insira o seu email"
 *               required:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Input criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/cadastrar', criarInput);

/**
 * @swagger
 * /input/editar/{id_input}:
 *   put:
 *     summary: Atualiza um input pelo ID
 *     tags: [Inputs]
 *     parameters:
 *       - in: path
 *         name: id_input
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do input
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_input:
 *                 type: string
 *                 example: "Telefone"
 *               type:
 *                 type: string
 *                 example: "number"
 *               input:
 *                 type: text
 *                 example: "Insira o seu telefone"
 *               required:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Input atualizado com sucesso
 *       404:
 *         description: Input não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/editar/:id_input', atualizarInput);

/**
 * @swagger
 * /input/deletar/{id_input}:
 *   delete:
 *     summary: Deleta um input pelo ID
 *     tags: [Inputs]
 *     parameters:
 *       - in: path
 *         name: id_input
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do input
 *     responses:
 *       200:
 *         description: Input deletado com sucesso
 *       404:
 *         description: Input não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/deletar/:id_input', deletarInput);

module.exports = router;
