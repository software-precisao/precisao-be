const express = require('express');
const router = express.Router();

const origemController = require('../../controllers/crm/origem/origemController');

/**
 * @swagger
 * tags:
 *   name: Origem
 *   description: Endpoints para gerenciar origens
 */

/**
 * @swagger
 * /origem/cadastrar:
 *   post:
 *     summary: Criar uma nova origem
 *     tags: [Origem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_origem:
 *                 type: string
 *             required:
 *               - nome_origem
 *     responses:
 *       201:
 *         description: Origem criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_origem:
 *                   type: integer
 *                   description: ID da origem criada
 *       400:
 *         description: Dados inválidos ou erro na requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/cadastrar', origemController.createOrigem);

/**
 * @swagger
 * /origem/:
 *   get:
 *     summary: Obter todas as origens
 *     tags: [Origem]
 *     responses:
 *       200:
 *         description: Lista de origens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_origem:
 *                     type: integer
 *                   nome_origem:
 *                     type: string
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/', origemController.getOrigens);

/**
 * @swagger
 * /origem/{id_origem}:
 *   get:
 *     summary: Obter uma origem por ID
 *     tags: [Origem]
 *     parameters:
 *       - in: path
 *         name: id_origem
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Origem encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_origem:
 *                   type: integer
 *                 nome_origem:
 *                   type: string
 *       404:
 *         description: Origem não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/:id_origem', origemController.getOrigemById);

/**
 * @swagger
 * /origem/editar/{id_origem}:
 *   put:
 *     summary: Atualizar uma origem existente
 *     tags: [Origem]
 *     parameters:
 *       - in: path
 *         name: id_origem
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_origem:
 *                 type: string
 *     responses:
 *       200:
 *         description: Origem atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_origem:
 *                   type: integer
 *                   description: ID da origem atualizada
 *       400:
 *         description: Dados inválidos ou erro na requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       404:
 *         description: Origem não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.put('/editar/:id_origem', origemController.updateOrigem);

/**
 * @swagger
 * /origem/deletar/{id_origem}:
 *   delete:
 *     summary: Excluir uma origem
 *     tags: [Origem]
 *     parameters:
 *       - in: path
 *         name: id_origem
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Origem excluída com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Origem não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.delete('/deletar/:id_origem', origemController.deleteOrigem);

module.exports = router;
