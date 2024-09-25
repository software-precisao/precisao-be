const express = require('express');
const router = express.Router();
const propostaController = require('../controllers/proposta/propostaController');

/**
 * @swagger
 * tags:
 *   name: Proposta
 *   description: Endpoints para gerenciar propostas
 */

/**
 * @swagger
 * /proposta/cadastrar:
 *   post:
 *     summary: Criar uma nova proposta
 *     tags: [Proposta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *               custosFixos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nome:
 *                       type: string
 *                     valor:
 *                       type: number
 *               custosVariaveis:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nome:
 *                       type: string
 *                     valor:
 *                       type: number
 *               colaboradores:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nome:
 *                       type: string
 *                     valorHora:
 *                       type: number
 *                     horasTrabalhadas:
 *                       type: number
 *             required:
 *               - descricao
 *     responses:
 *       201:
 *         description: Proposta criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_proposta:
 *                   type: integer
 *                   description: ID da proposta criada
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
router.post('/cadastrar', propostaController.createProposta);

/**
 * @swagger
 * /proposta/:
 *   get:
 *     summary: Obter todas as propostas
 *     tags: [Proposta]
 *     responses:
 *       200:
 *         description: Lista de propostas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_proposta:
 *                     type: integer
 *                   descricao:
 *                     type: string
 *                   custosFixos:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         nome:
 *                           type: string
 *                         valor:
 *                           type: number
 *                   custosVariaveis:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         nome:
 *                           type: string
 *                         valor:
 *                           type: number
 *                   colaboradores:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         nome:
 *                           type: string
 *                         valorHora:
 *                           type: number
 *                         horasTrabalhadas:
 *                           type: number
 *                   custoTotal:
 *                     type: number
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
router.get('/', propostaController.getPropostas);

/**
 * @swagger
 * /proposta/{id_proposta}:
 *   get:
 *     summary: Obter uma proposta por ID
 *     tags: [Proposta]
 *     parameters:
 *       - in: path
 *         name: id_proposta
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proposta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_proposta:
 *                   type: integer
 *                 descricao:
 *                   type: string
 *                 custosFixos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       nome:
 *                         type: string
 *                       valor:
 *                         type: number
 *                 custosVariaveis:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       nome:
 *                         type: string
 *                       valor:
 *                         type: number
 *                 colaboradores:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       nome:
 *                         type: string
 *                       valorHora:
 *                         type: number
 *                       horasTrabalhadas:
 *                         type: number
 *                 custoTotal:
 *                   type: number
 *       404:
 *         description: Proposta não encontrada
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
router.get('/:id_proposta', propostaController.getPropostaById);

/**
 * @swagger
 * /proposta/{id_proposta}:
 *   put:
 *     summary: Atualizar uma proposta existente
 *     tags: [Proposta]
 *     parameters:
 *       - in: path
 *         name: id_proposta
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
 *               descricao:
 *                 type: string
 *               custosFixos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nome:
 *                       type: string
 *                     valor:
 *                       type: number
 *               custosVariaveis:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nome:
 *                       type: string
 *                     valor:
 *                       type: number
 *               colaboradores:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nome:
 *                       type: string
 *                     valorHora:
 *                       type: number
 *                     horasTrabalhadas:
 *                       type: number
 *     responses:
 *       200:
 *         description: Proposta atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_proposta:
 *                   type: integer
 *                   description: ID da proposta atualizada
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
 *         description: Proposta não encontrada
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
router.put('/:id_proposta', propostaController.updateProposta);

/**
 * @swagger
 * /proposta/{id_proposta}:
 *   delete:
 *     summary: Excluir uma proposta
 *     tags: [Proposta]
 *     parameters:
 *       - in: path
 *         name: id_proposta
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proposta excluída com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Proposta não encontrada
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
router.delete('/:id_proposta', propostaController.deleteProposta);

module.exports = router;
