const express = require("express");
const router = express.Router();
const statusController = require("../controllers/status/statusController");

/**
 * @swagger
 * /status/cadastrar:
 *   post:
 *     summary: Cria um novo status
 *     tags: [Status]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *                 example: "Active"
 *     responses:
 *       201:
 *         description: Status criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/cadastrar", statusController.criarStatus);

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Obtém todos os status
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: Lista de status retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", statusController.obterStatus);

/**
 * @swagger
 * /status/{id_status}:
 *   get:
 *     summary: Obtém um status pelo ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id_status
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do status
 *     responses:
 *       200:
 *         description: Status retornado com sucesso
 *       404:
 *         description: Status não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/:id_status", statusController.obterStatusPorId);

/**
 * @swagger
 * /status/{id_status}:
 *   put:
 *     summary: Atualiza um status pelo ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id_status
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *                 example: "Inactive"
 *     responses:
 *       200:
 *         description: Status atualizado com sucesso
 *       404:
 *         description: Status não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/:id_status", statusController.atualizarStatus);

/**
 * @swagger
 * /status/{id_status}:
 *   delete:
 *     summary: Deleta um status pelo ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id_status
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do status
 *     responses:
 *       200:
 *         description: Status deletado com sucesso
 *       404:
 *         description: Status não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/:id_status", statusController.deletarStatus);

module.exports = router;