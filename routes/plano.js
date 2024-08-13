const express = require('express');
const router = express.Router();
const planoController = require('../controllers/plano/planoController');

/**
 * @swagger
 * tags:
 *   name: Planos
 *   description: Endpoints para gerenciar os planos
 */

/**
 * @swagger
 * /planos/cadastrar:
 *   post:
 *     tags:
 *       - Planos
 *     summary: Cria um novo plano.
 *     description: Cria um novo plano com detalhes e itens.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_plano:
 *                 type: string
 *               descricao:
 *                 type: string
 *               valor_plano:
 *                 type: string
 *               tag:
 *                 type: string
 *               itens_do_plano:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     item_plano:
 *                       type: string
 *     responses:
 *       201:
 *         description: Plano criado com sucesso.
 *       500:
 *         description: Erro ao criar plano.
 */
router.post('/cadastrar', planoController.criarPlano);

/**
 * @swagger
 * /planos/:
 *   get:
 *     tags:
 *       - Planos
 *     summary: Retorna todos os planos.
 *     description: Retorna uma lista de todos os planos existentes.
 *     responses:
 *       200:
 *         description: Lista de planos.
 *       500:
 *         description: Erro ao buscar planos.
 */
router.get('/', planoController.buscarTodosPlanos);

/**
 * @swagger
 * /planos/{id_plano}:
 *   get:
 *     tags:
 *       - Planos
 *     summary: Retorna um plano pelo ID.
 *     description: Retorna detalhes de um plano específico pelo ID.
 *     parameters:
 *       - in: path
 *         name: id_plano
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalhes do plano.
 *       404:
 *         description: Plano não encontrado.
 *       500:
 *         description: Erro ao buscar plano.
 */
router.get('/:id_plano', planoController.buscarPlanoPorId);

/**
 * @swagger
 * /planos/editar/{id_plano}:
 *   put:
 *     tags:
 *       - Planos
 *     summary: Atualiza um plano existente.
 *     description: Atualiza os detalhes e itens de um plano existente pelo ID.
 *     parameters:
 *       - in: path
 *         name: id_plano
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
 *               nome_plano:
 *                 type: string
 *               descricao:
 *                 type: string
 *               valor_plano:
 *                 type: string
 *               tag:
 *                 type: string
 *               itens_do_plano:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     item_plano:
 *                       type: string
 *     responses:
 *       200:
 *         description: Plano atualizado com sucesso.
 *       404:
 *         description: Plano não encontrado.
 *       500:
 *         description: Erro ao atualizar plano.
 */
router.put('/editar/:id_plano', planoController.atualizarPlano);

/**
 * @swagger
 * /planos/deletar/{id_plano}:
 *   delete:
 *     tags:
 *       - Planos
 *     summary: Deleta um plano pelo ID.
 *     description: Remove um plano específico pelo ID.
 *     parameters:
 *       - in: path
 *         name: id_plano
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Plano deletado com sucesso.
 *       404:
 *         description: Plano não encontrado.
 *       500:
 *         description: Erro ao deletar plano.
 */
router.delete('/deletar/:id_plano', planoController.deletarPlano);

module.exports = router;
