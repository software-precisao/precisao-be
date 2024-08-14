const express = require('express');
const router = express.Router();

const prospectController = require('../controllers/prospect/prospectController');

/**
 * @swagger
 * tags:
 *   name: Prospect
 *   description: Endpoints para gerenciar prospects
 */

/**
 * @swagger
 * /prospect/cadastrar:
 *   post:
 *     summary: Criar um novo prospect
 *     tags: [Prospect]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_lead:
 *                 type: string
 *               id_responsavel:
 *                 type: integer
 *               id_fase:
 *                 type: integer
 *               origem:
 *                 type: integer
 *               valor_projeto:
 *                 type: number
 *                 format: float
 *               doc:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               telefone1:
 *                 type: string
 *               telefone2:
 *                 type: string
 *               email:
 *                 type: string
 *               website:
 *                 type: string
 *               observacao:
 *                 type: string
 *             required:
 *               - id_fase
 *     responses:
 *       201:
 *         description: Prospect criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_prospect:
 *                   type: integer
 *                   description: ID do prospect criado
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
router.post('/cadastrar', prospectController.createProspect);

/**
 * @swagger
 * /prospect/:
 *   get:
 *     summary: Obter todos os prospects
 *     tags: [Prospect]
 *     responses:
 *       200:
 *         description: Lista de prospects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_prospect:
 *                     type: integer
 *                   nome_lead:
 *                     type: string
 *                   id_responsavel:
 *                     type: integer
 *                   id_fase:
 *                     type: integer
 *                   origem:
 *                     type: integer
 *                   valor_projeto:
 *                     type: number
 *                     format: float
 *                   doc:
 *                     type: string
 *                   cnpj:
 *                     type: string
 *                   telefone1:
 *                     type: string
 *                   telefone2:
 *                     type: string
 *                   email:
 *                     type: string
 *                   website:
 *                     type: string
 *                   observacao:
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
router.get('/', prospectController.getProspects);

/**
 * @swagger
 * /prospect/{id_prospect}:
 *   get:
 *     summary: Obter um prospect por ID
 *     tags: [Prospect]
 *     parameters:
 *       - in: path
 *         name: id_prospect
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prospect encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_prospect:
 *                   type: integer
 *                 nome_lead:
 *                   type: string
 *                 id_responsavel:
 *                   type: integer
 *                 id_fase:
 *                   type: integer
 *                 origem:
 *                   type: integer
 *                 valor_projeto:
 *                   type: number
 *                   format: float
 *                 doc:
 *                   type: string
 *                 cnpj:
 *                   type: string
 *                 telefone1:
 *                   type: string
 *                 telefone2:
 *                   type: string
 *                 email:
 *                   type: string
 *                 website:
 *                   type: string
 *                 observacao:
 *                   type: string
 *       404:
 *         description: Prospect não encontrado
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
router.get('/:id_prospect', prospectController.getProspectById);

/**
 * @swagger
 * /prospect/{id_prospect}:
 *   put:
 *     summary: Atualizar um prospect existente
 *     tags: [Prospect]
 *     parameters:
 *       - in: path
 *         name: id_prospect
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
 *               nome_lead:
 *                 type: string
 *               id_responsavel:
 *                 type: integer
 *               id_fase:
 *                 type: integer
 *               origem:
 *                 type: integer
 *               valor_projeto:
 *                 type: number
 *                 format: float
 *               doc:
 *                 type: string
 *               cnpj:
 *                 type: string
 *               telefone1:
 *                 type: string
 *               telefone2:
 *                 type: string
 *               email:
 *                 type: string
 *               website:
 *                 type: string
 *               observacao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Prospect atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_prospect:
 *                   type: integer
 *                   description: ID do prospect atualizado
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
 *         description: Prospect não encontrado
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
router.put('/:id_prospect', prospectController.updateProspect);

/**
 * @swagger
 * /prospect/{id_prospect}:
 *   delete:
 *     summary: Excluir um prospect
 *     tags: [Prospect]
 *     parameters:
 *       - in: path
 *         name: id_prospect
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prospect excluído com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Prospect não encontrado
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
router.delete('/:id_prospect', prospectController.deleteProspect);

module.exports = router;
