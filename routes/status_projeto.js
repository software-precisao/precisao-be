const express = require("express");
const router = express.Router();
const statusProjetoController = require("../controllers/status/statusProjetoController");

// Swagger documentation tags
/**
 * @swagger
 * tags:
 *   name: StatusProjeto
 *   description: Gerenciamento dos Status dos Projetos
 */

/**
 * @swagger
 * /status-projeto/cadastrar:
 *   post:
 *     summary: Cadastrar novo status de projeto
 *     tags: [StatusProjeto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: "Em andamento"
 *     responses:
 *       201:
 *         description: Status criado com sucesso.
 *       400:
 *         description: Erro na criação do status.
 */
router.post("/cadastrar", statusProjetoController.criarStatusProjeto)


/**
 * @swagger
 * /status-projeto/:
 *   get:
 *     summary: Listar todos os status dos projetos
 *     tags: [StatusProjeto]
 *     responses:
 *       200:
 *         description: Lista de status dos projetos.
 *       500:
 *         description: Erro ao buscar os status.
 */
router.get("/", statusProjetoController.listarStatusProjetos)


/**
 * @swagger
 * /status-projeto/editar/{id}:
 *   put:
 *     summary: Atualizar um status de projeto
 *     tags: [StatusProjeto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do status a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: "Concluído"
 *     responses:
 *       200:
 *         description: Status atualizado com sucesso.
 *       404:
 *         description: Status não encontrado.
 */
router.put("/editar/:id", statusProjetoController.atualizarStatusProjeto)


/**
 * @swagger
 * /status-projeto/deletar/{id}:
 *   delete:
 *     summary: Deletar um status de projeto
 *     tags: [StatusProjeto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do status a ser deletado
 *     responses:
 *       200:
 *         description: Status deletado com sucesso.
 *       404:
 *         description: Status não encontrado.
 */
router.delete("/deletar/:id", statusProjetoController.deletarStatusProjeto)


module.exports = router;
