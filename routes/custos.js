const express = require("express");
const router = express.Router();
const custoController = require("../controllers/custos/custosController");

/**
 * @swagger
 * tags:
 *   name: Custos
 *   description: Gerenciamento de custos fixos e variáveis
 */

/**
 * @swagger
 * /custo:
 *   get:
 *     summary: Retorna todos os custos
 *     tags: [Custos]
 *     responses:
 *       200:
 *         description: Lista de custos
 *       500:
 *         description: Erro ao buscar custos
 */
router.get("/", custoController.getCustos);

/**
 * @swagger
 * /custo/{id_custo}:
 *   get:
 *     summary: Retorna um custo pelo ID
 *     tags: [Custos]
 *     parameters:
 *       - in: path
 *         name: id_custo
 *         required: true
 *         description: ID do custo
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Custo encontrado
 *       404:
 *         description: Custo não encontrado
 *       500:
 *         description: Erro ao buscar custo
 */
router.get("/:id_custo", custoController.getCustoById);

/**
 * @swagger
 * /custo/cadastrar:
 *   post:
 *     summary: Cria um novo custo
 *     tags: [Custos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 enum: [fixo, variavel]
 *                 description: Tipo de custo
 *               descricao:
 *                 type: string
 *                 description: Descrição do custo
 *               valor:
 *                 type: number
 *                 format: decimal
 *                 description: Valor do custo
 *     responses:
 *       201:
 *         description: Custo criado com sucesso
 *       500:
 *         description: Erro ao criar custo
 */
router.post("/cadastrar", custoController.createCusto);

/**
 * @swagger
 * /custo/editar/{id_custo}:
 *   put:
 *     summary: Atualiza um custo existente
 *     tags: [Custos]
 *     parameters:
 *       - in: path
 *         name: id_custo
 *         required: true
 *         description: ID do custo a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 enum: [fixo, variavel]
 *                 description: Tipo de custo
 *               descricao:
 *                 type: string
 *                 description: Descrição do custo
 *               valor:
 *                 type: number
 *                 format: decimal
 *                 description: Valor do custo
 *     responses:
 *       200:
 *         description: Custo atualizado com sucesso
 *       404:
 *         description: Custo não encontrado
 *       500:
 *         description: Erro ao atualizar custo
 */
router.put("/editar/:id_custo", custoController.updateCusto);

/**
 * @swagger
 * /custo/deletar/{id_custo}:
 *   delete:
 *     summary: Exclui um custo pelo ID
 *     tags: [Custos]
 *     parameters:
 *       - in: path
 *         name: id_custo
 *         required: true
 *         description: ID do custo a ser excluído
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Custo excluído com sucesso
 *       404:
 *         description: Custo não encontrado
 *       500:
 *         description: Erro ao excluir custo
 */
router.delete("/deletar/:id_custo", custoController.deleteCusto);

module.exports = router;
