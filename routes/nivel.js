const express = require("express");
const router = express.Router();
const niveisController = require("../controllers/nivel/nivelController");

/**
 * @swagger
 * /niveis:
 *   get:
 *     summary: Obtém todos os níveis
 *     tags: [Níveis]
 *     responses:
 *       200:
 *         description: Lista de níveis retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", niveisController.obterNiveis);

/**
 * @swagger
 * /niveis/{id_nivel}:
 *   get:
 *     summary: Obtém um nível pelo ID
 *     tags: [Níveis]
 *     parameters:
 *       - in: path
 *         name: id_nivel
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do nível
 *     responses:
 *       200:
 *         description: Nível retornado com sucesso
 *       404:
 *         description: Nível não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/:id_nivel", niveisController.obterNivelPorId);

/**
 * @swagger
 * /niveis/cadastro:
 *   post:
 *     summary: Cria um novo nível
 *     tags: [Níveis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *                 example: "Admin"
 *     responses:
 *       201:
 *         description: Nível criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/cadastro", niveisController.criarNivel);

/**
 * @swagger
 * /niveis/{id_nivel}:
 *   put:
 *     summary: Atualiza um nível pelo ID
 *     tags: [Níveis]
 *     parameters:
 *       - in: path
 *         name: id_nivel
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do nível
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               label:
 *                 type: string
 *                 example: "User"
 *     responses:
 *       200:
 *         description: Nível atualizado com sucesso
 *       404:
 *         description: Nível não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/:id_nivel", niveisController.atualizarNivel);

/**
 * @swagger
 * /niveis/{id_nivel}:
 *   delete:
 *     summary: Deleta um nível pelo ID
 *     tags: [Níveis]
 *     parameters:
 *       - in: path
 *         name: id_nivel
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do nível
 *     responses:
 *       200:
 *         description: Nível deletado com sucesso
 *       404:
 *         description: Nível não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/:id_nivel", niveisController.deletarNivel);

module.exports = router;