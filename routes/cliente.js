const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/cliente/clienteController');

/**
 * @swagger
 * tags:
 *   name: Cliente
 *   description: Endpoints para gerenciar clientes
 */

/**
 * @swagger
 * /cliente/cadastrar:
 *   post:
 *     summary: Criar um novo cliente
 *     tags: [Cliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_cliente:
 *                 type: string
 *               id_tipo_cliente:
 *                 type: integer
 *               razao_social:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               telefone1:
 *                 type: string
 *               telefone2:
 *                 type: string
 *               email:
 *                 type: string
 *               observacao:
 *                 type: string
 *               endereco:
 *                 type: string
 *             required:
 *               - nome_cliente
 *               - cnpj
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_cliente:
 *                   type: integer
 *                   description: ID do cliente criado
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
router.post('/cadastrar', clienteController.createCliente);

/**
 * @swagger
 * /cliente/:
 *   get:
 *     summary: Obter todos os clientes
 *     tags: [Cliente]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_cliente:
 *                     type: integer
 *                   nome_cliente:
 *                     type: string
 *                   razao_social:
 *                     type: string
 *                   cnpj:
 *                     type: string
 *                   id_tipo_cliente:
 *                      type: integer
 *                   telefone1:
 *                     type: string
 *                   telefone2:
 *                     type: string
 *                   email:
 *                     type: string
 *                   observacao:
 *                     type: string
 *                   endereco:
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
router.get('/', clienteController.getClientes);

/**
 * @swagger
 * /cliente/{id_cliente}:
 *   get:
 *     summary: Obter um cliente por ID
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id_cliente
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_cliente:
 *                   type: integer
 *                 nome_cliente:
 *                   type: string
 *                 razao_social:
 *                   type: string
 *                 cnpj:
 *                   type: string
 *                 id_tipo_cliente:
 *                   type: integer
 *                 telefone1:
 *                   type: string
 *                 telefone2:
 *                   type: string
 *                 email:
 *                   type: string
 *                 observacao:
 *                   type: string
 *                 endereco:
 *                   type: string
 *       404:
 *         description: Cliente não encontrado
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
router.get('/:id_cliente', clienteController.getClienteById);

/**
 * @swagger
 * /editar/cliente/{id_cliente}:
 *   put:
 *     summary: Atualizar um cliente existente
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id_cliente
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
 *               nome_cliente:
 *                 type: string
 *               id_projeto:
 *                 type: integer
 *               razao_social:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               telefone1:
 *                 type: string
 *               id_tipo_cliente:
 *                 type: integer
 *               telefone2:
 *                 type: string
 *               email:
 *                 type: string
 *               observacao:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_cliente:
 *                   type: integer
 *                   description: ID do cliente atualizado
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
 *         description: Cliente não encontrado
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
router.put('/editar/:id_cliente', clienteController.updateCliente);

/**
 * @swagger
 * /cliente/{id_cliente}:
 *   delete:
 *     summary: Excluir um cliente
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: id_cliente
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente excluído com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Cliente não encontrado
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
router.delete('/:id_cliente', clienteController.deleteCliente);

module.exports = router;
