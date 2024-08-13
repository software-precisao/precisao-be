const express = require('express');
const router = express.Router();
const {
  criarIntro,
  obterIntros,
  obterIntroPorId,
  atualizarIntro,
  deletarIntro,
} = require('../controllers/intro/introController');

/**
 * @swagger
 * /intro/cadastrar:
 *   post:
 *     summary: Cria um novo Intro
 *     tags: [Intro]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *                 example: 1
 *               id_perfil_igreja:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Intro criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/cadastrar', criarIntro);

/**
 * @swagger
 * /intro:
 *   get:
 *     summary: Obtém todos os Intros
 *     tags: [Intro]
 *     responses:
 *       200:
 *         description: Lista de Intros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_intro:
 *                     type: integer
 *                     example: 1
 *                   status:
 *                     type: integer
 *                     example: 1
 *                   id_perfil_igreja:
 *                     type: integer
 *                     example: 2
 *                   Perfil:
 *                     type: object
 *                     properties:
 *                       id_perfil_igreja:
 *                         type: integer
 *                         example: 2
 *                       nome:
 *                         type: string
 *                         example: "Perfil Exemplo"
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', obterIntros);

/**
 * @swagger
 * /intro/{id_intro}:
 *   get:
 *     summary: Obtém um Intro pelo ID
 *     tags: [Intro]
 *     parameters:
 *       - in: path
 *         name: id_intro
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Intro
 *     responses:
 *       200:
 *         description: Intro retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_intro:
 *                   type: integer
 *                   example: 1
 *                 status:
 *                   type: integer
 *                   example: 1
 *                 id_perfil_igreja:
 *                   type: integer
 *                   example: 2
 *                 Perfil:
 *                   type: object
 *                   properties:
 *                     id_perfil_igreja:
 *                       type: integer
 *                       example: 2
 *                     nome:
 *                       type: string
 *                       example: "Perfil Exemplo"
 *       404:
 *         description: Intro não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id_intro', obterIntroPorId);

/**
 * @swagger
 * /intro/editar/{id_intro}:
 *   put:
 *     summary: Atualiza um Intro pelo ID
 *     tags: [Intro]
 *     parameters:
 *       - in: path
 *         name: id_intro
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Intro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *                 example: 1
 *               id_perfil_igreja:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Intro atualizado com sucesso
 *       404:
 *         description: Intro não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/editar/:id_intro', atualizarIntro);

/**
 * @swagger
 * /intro/deletar/{id_intro}:
 *   delete:
 *     summary: Deleta um Intro pelo ID
 *     tags: [Intro]
 *     parameters:
 *       - in: path
 *         name: id_intro
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Intro
 *     responses:
 *       204:
 *         description: Intro deletado com sucesso
 *       404:
 *         description: Intro não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/deletar/:id_intro', deletarIntro);

module.exports = router;
