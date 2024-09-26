const express = require("express");
const router = express.Router();
const tipoClienteController = require("../controllers/tipo/tipoClienteController");

/**
 * @swagger
 * tags:
 *   name: TipoCliente
 *   description: Gerenciamento dos tipos de cliente
 */

/**
 * @swagger
 * /tipo-cliente/cadastrar:
 *   post:
 *     summary: Cadastrar um novo tipo de cliente
 *     tags: [TipoCliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_cliente:
 *                 type: string
 *                 example: "Pessoa Física"
 *     responses:
 *       201:
 *         description: Tipo de cliente criado com sucesso.
 *       500:
 *         description: Erro ao criar tipo de cliente.
 */
router.post("/cadastrar", tipoClienteController.criarTipoCliente);

/**
 * @swagger
 * /tipo-cliente:
 *   get:
 *     summary: Listar todos os tipos de cliente
 *     tags: [TipoCliente]
 *     responses:
 *       200:
 *         description: Lista de tipos de cliente.
 *       500:
 *         description: Erro ao buscar os tipos de cliente.
 */
router.get("/", tipoClienteController.listarTipoClientes);

/**
 * @swagger
 * /tipo-cliente/{id}:
 *   get:
 *     summary: Obter tipo de cliente por ID
 *     tags: [TipoCliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de cliente a ser buscado
 *     responses:
 *       200:
 *         description: Tipo de cliente encontrado.
 *       404:
 *         description: Tipo de cliente não encontrado.
 *       500:
 *         description: Erro ao buscar o tipo de cliente.
 */
router.get("/:id", tipoClienteController.obterTipoClientePorId);

/**
 * @swagger
 * /tipo-cliente/editar/{id}:
 *   put:
 *     summary: Atualizar um tipo de cliente
 *     tags: [TipoCliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de cliente a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_cliente:
 *                 type: string
 *                 example: "Pessoa Jurídica"
 *     responses:
 *       200:
 *         description: Tipo de cliente atualizado com sucesso.
 *       404:
 *         description: Tipo de cliente não encontrado.
 *       500:
 *         description: Erro ao atualizar o tipo de cliente.
 */
router.put("/editar/:id", tipoClienteController.atualizarTipoCliente);

/**
 * @swagger
 * /tipo-cliente/deletar/{id}:
 *   delete:
 *     summary: Deletar um tipo de cliente
 *     tags: [TipoCliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de cliente a ser deletado
 *     responses:
 *       200:
 *         description: Tipo de cliente deletado com sucesso.
 *       404:
 *         description: Tipo de cliente não encontrado.
 *       500:
 *         description: Erro ao deletar o tipo de cliente.
 */
router.delete("/deletar/:id", tipoClienteController.deletarTipoCliente);

module.exports = router;
