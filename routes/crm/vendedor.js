const express = require('express');
const router = express.Router();

const vendedorController = require('../../controllers/crm/vendedor/vendedorController');

/**
 * @swagger
 * tags:
 *   name: Vendedor
 *   description: Endpoints para gerenciar vendedores
 */

/**
 * @swagger
 * /vendedor/cadastrar:
 *   post:
 *     summary: Criar um novo vendedor
 *     tags: [Vendedor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_vendedor:
 *                 type: string
 *             required:
 *               - nome_vendedor
 *     responses:
 *       201:
 *         description: Vendedor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_vendedor:
 *                   type: integer
 *                   description: ID do vendedor criado
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
router.post('/cadastrar', vendedorController.createVendedor);

/**
 * @swagger
 * /vendedor/:
 *   get:
 *     summary: Obter todos os vendedores
 *     tags: [Vendedor]
 *     responses:
 *       200:
 *         description: Lista de vendedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_vendedor:
 *                     type: integer
 *                   nome_vendedor:
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
router.get('/', vendedorController.getVendedores);

/**
 * @swagger
 * /vendedor/{id_vendedor}:
 *   get:
 *     summary: Obter um vendedor por ID
 *     tags: [Vendedor]
 *     parameters:
 *       - in: path
 *         name: id_vendedor
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vendedor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_vendedor:
 *                   type: integer
 *                 nome_vendedor:
 *                   type: string
 *       404:
 *         description: Vendedor não encontrado
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
router.get('/:id_vendedor', vendedorController.getVendedorById);

/**
 * @swagger
 * /vendedor/editar/{id_vendedor}:
 *   put:
 *     summary: Atualizar um vendedor existente
 *     tags: [Vendedor]
 *     parameters:
 *       - in: path
 *         name: id_vendedor
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
 *               nome_vendedor:
 *                 type: string
 *     responses:
 *       200:
 *         description: Vendedor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_vendedor:
 *                   type: integer
 *                   description: ID do vendedor atualizado
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
 *         description: Vendedor não encontrado
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
router.put('/editar/:id_vendedor', vendedorController.updateVendedor);

/**
 * @swagger
 * /vendedor/deletar/{id_vendedor}:
 *   delete:
 *     summary: Excluir um vendedor
 *     tags: [Vendedor]
 *     parameters:
 *       - in: path
 *         name: id_vendedor
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vendedor excluído com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Vendedor não encontrado
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
router.delete('/deletar/:id_vendedor', vendedorController.deleteVendedor);

module.exports = router;
