const express = require("express");
const router = express.Router();
const planosController = require("../controllers/plano/planoController");

/**
 * @swagger
 * /planos:
 *   get:
 *     summary: Obtém todos os planos
 *     tags: [Planos]
 *     responses:
 *       200:
 *         description: Lista de planos retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", planosController.buscarTodosPlanos);

/**
 * @swagger
 * /planos/items:
 *   get:
 *     summary: Obtém todos os itens de planos
 *     tags: [Planos]
 *     responses:
 *       200:
 *         description: Lista de itens de planos retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/items", planosController.buscarTodosItens);

/**
 * @swagger
 * /planos/cadastrar:
 *   post:
 *     summary: Cria um novo plano
 *     tags: [Planos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo_plano:
 *                 type: string
 *                 example: "Plano Básico"
 *               subtitulo_plano:
 *                 type: string
 *                 example: "Subtítulo do Plano Básico"
 *               valor_plano_mes:
 *                 type: string
 *                 example: "29.99"
 *               tag:
 *                 type: string
 *                 example: "basic"
 *               ofertas:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Plano criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/cadastrar", planosController.criarPlano);

/**
 * @swagger
 * /planos/buscar/{id_plano}:
 *   get:
 *     summary: Obtém um plano pelo ID
 *     tags: [Planos]
 *     parameters:
 *       - in: path
 *         name: id_plano
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do plano
 *     responses:
 *       200:
 *         description: Plano retornado com sucesso
 *       404:
 *         description: Plano não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/buscar/:id_plano", planosController.buscarPlanoPorId);

/**
 * @swagger
 * /planos/edit/{id_plano}:
 *   put:
 *     summary: Atualiza um plano pelo ID
 *     tags: [Planos]
 *     parameters:
 *       - in: path
 *         name: id_plano
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do plano
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo_plano:
 *                 type: string
 *               subtitulo_plano:
 *                 type: string
 *               valor_plano_mes:
 *                 type: string
 *               tag:
 *                 type: string
 *     responses:
 *       200:
 *         description: Plano atualizado com sucesso
 *       404:
 *         description: Plano não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/edit/:id_plano", planosController.atualizarPlano);

/**
 * @swagger
 * /planos/delete/{id_plano}:
 *   delete:
 *     summary: Deleta um plano pelo ID
 *     tags: [Planos]
 *     parameters:
 *       - in: path
 *         name: id_plano
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do plano
 *     responses:
 *       200:
 *         description: Plano e itens relacionados deletados com sucesso
 *       404:
 *         description: Plano não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/delete/:id_plano", planosController.deletarPlano);

module.exports = router;