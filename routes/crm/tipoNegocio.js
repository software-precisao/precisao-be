const express = require('express');
const router = express.Router();

const tipoNegocioController = require('../../controllers/crm/negocio/tipoNegocioController');

/**
 * @swagger
 * tags:
 *   name: TipoNegocio
 *   description: Endpoints para gerenciar tipos de negócio
 */

/**
 * @swagger
 * /tiponegocio/cadastrar:
 *   post:
 *     summary: Criar um novo tipo de negócio
 *     tags: [TipoNegocio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_tiponegocio:
 *                 type: string
 *             required:
 *               - nome_tiponegocio
 *     responses:
 *       201:
 *         description: Tipo de negócio criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_tiponegocio:
 *                   type: integer
 *                   description: ID do tipo de negócio criado
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
router.post('/cadastrar', tipoNegocioController.createTipoNegocio);

/**
 * @swagger
 * /tiponegocio/:
 *   get:
 *     summary: Obter todos os tipos de negócio
 *     tags: [TipoNegocio]
 *     responses:
 *       200:
 *         description: Lista de tipos de negócio
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_tiponegocio:
 *                     type: integer
 *                   nome_tiponegocio:
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
router.get('/', tipoNegocioController.getTiposNegocio);

/**
 * @swagger
 * /tiponegocio/{id_tipo_negocio}:
 *   get:
 *     summary: Obter um tipo de negócio por ID
 *     tags: [TipoNegocio]
 *     parameters:
 *       - in: path
 *         name: id_tiponegocio
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de negócio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_tiponegocio:
 *                   type: integer
 *                 nome_tiponegocio:
 *                   type: string
 *       404:
 *         description: Tipo de negócio não encontrado
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
router.get('/:id_tipo_negocio', tipoNegocioController.getTipoNegocioById);

/**
 * @swagger
 * /tiponegocio/editar/{id_tipo_negocio}:
 *   put:
 *     summary: Atualizar um tipo de negócio existente
 *     tags: [TipoNegocio]
 *     parameters:
 *       - in: path
 *         name: id_tiponegocio
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
 *               nome_tiponegocio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de negócio atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_tiponegocio:
 *                   type: integer
 *                   description: ID do tipo de negócio atualizado
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
 *         description: Tipo de negócio não encontrado
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
router.put('/editar/:id_tipo_negocio', tipoNegocioController.updateTipoNegocio);

/**
 * @swagger
 * /tiponegocio/deletar/{id_tipo_negocio}:
 *   delete:
 *     summary: Excluir um tipo de negócio
 *     tags: [TipoNegocio]
 *     parameters:
 *       - in: path
 *         name: id_tiponegocio
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de negócio excluído com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Tipo de negócio não encontrado
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
router.delete('/deletar/:id_tipo_negocio', tipoNegocioController.deleteTipoNegocio);

module.exports = router;
