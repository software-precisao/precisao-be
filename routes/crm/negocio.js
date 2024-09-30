const express = require('express');
const router = express.Router();

const negocioController = require('../../controllers/crm/negocio/negocioController');

/**
 * @swagger
 * tags:
 *   name: Negocio
 *   description: Endpoints para gerenciar negócios
 */

/**
 * @swagger
 * /negocios/cadastrar:
 *   post:
 *     summary: Criar um novo negócio
 *     tags: [Negocio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_negocio:
 *                 type: string
 *               id_vendedor:
 *                 type: integer
 *               id_tipo_negocio:
 *                 type: integer
 *             required:
 *               - nome_negocio
 *               - id_vendedor
 *               - id_tiponegocio
 *     responses:
 *       201:
 *         description: Negócio criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_negocio:
 *                   type: integer
 *                   description: ID do negócio criado
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
router.post('/cadastrar', negocioController.createNegocio);

/**
 * @swagger
 * /negocios/:
 *   get:
 *     summary: Obter todos os negócios
 *     tags: [Negocio]
 *     responses:
 *       200:
 *         description: Lista de negócios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_negocio:
 *                     type: integer
 *                   nome_negocio:
 *                     type: string
 *                   id_vendedor:
 *                     type: integer
 *                   id_tiponegocio:
 *                     type: integer
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
router.get('/', negocioController.getNegocios);

/**
 * @swagger
 * /negocios/{id_negocio}:
 *   get:
 *     summary: Obter um negócio por ID
 *     tags: [Negocio]
 *     parameters:
 *       - in: path
 *         name: id_negocio
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Negócio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_negocio:
 *                   type: integer
 *                 nome_negocio:
 *                   type: string
 *                 id_vendedor:
 *                   type: integer
 *                 id_tiponegocio:
 *                   type: integer
 *       404:
 *         description: Negócio não encontrado
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
router.get('/:id_negocio', negocioController.getNegocioById);

/**
 * @swagger
 * /negocios/editar/{id_negocio}:
 *   put:
 *     summary: Atualizar um negócio existente
 *     tags: [Negocio]
 *     parameters:
 *       - in: path
 *         name: id_negocio
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
 *               nome_negocio:
 *                 type: string
 *               id_vendedor:
 *                 type: integer
 *               id_tiponegocio:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Negócio atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_negocio:
 *                   type: integer
 *                   description: ID do negócio atualizado
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
 *         description: Negócio não encontrado
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
router.put('/editar/:id_negocio', negocioController.updateNegocio);

/**
 * @swagger
 * /negocios/deletar/{id_negocio}:
 *   delete:
 *     summary: Excluir um negócio
 *     tags: [Negocio]
 *     parameters:
 *       - in: path
 *         name: id_negocio
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Negócio excluído com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Negócio não encontrado
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
router.delete('/deletar/:id_negocio', negocioController.deleteNegocio);

module.exports = router;
