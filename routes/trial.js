const express = require('express');
const router = express.Router();

const trialController = require('../controllers/trial/trialController');

/**
 * @swagger
 * tags:
 *   name: Trial
 *   description: Endpoints para gerenciar trials
 */

/**
 * @swagger
 * /trial/cadastrar:
 *   post:
 *     summary: Criar um novo trial
 *     tags: [Trial]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: integer
 *               id_perfil_igreja:
 *                 type: integer
 *             required:
 *               - data_inicio
 *               - status
 *               - id_perfil_igreja
 *     responses:
 *       201:
 *         description: Trial criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_trial:
 *                   type: integer
 *                   description: ID do trial criado
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
router.post('/cadastrar', trialController.createTrial);

/**
 * @swagger
 * /trial/:
 *   get:
 *     summary: Obter todos os trials
 *     tags: [Trial]
 *     responses:
 *       200:
 *         description: Lista de trials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_trial:
 *                     type: integer
 *                   data_inicio:
 *                     type: string
 *                     format: date
 *                   status:
 *                     type: integer
 *                   id_perfil_igreja:
 *                     type: integer
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
router.get('/', trialController.getTrials);

/**
 * @swagger
 * /trial/{id_trial}:
 *   get:
 *     summary: Obter um trial por ID
 *     tags: [Trial]
 *     parameters:
 *       - in: path
 *         name: id_trial
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Trial encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_trial:
 *                   type: integer
 *                 data_inicio:
 *                   type: string
 *                   format: date
 *                 status:
 *                   type: integer
 *                 id_perfil_igreja:
 *                   type: integer
 *       404:
 *         description: Trial não encontrado
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
router.get('/:id_trial', trialController.getTrialById);

/**
 * @swagger
 * /trial/{id_trial}:
 *   put:
 *     summary: Atualizar um trial existente
 *     tags: [Trial]
 *     parameters:
 *       - in: path
 *         name: id_trial
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
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: integer
 *               id_perfil_igreja:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Trial atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_trial:
 *                   type: integer
 *                   description: ID do trial atualizado
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
 *         description: Trial não encontrado
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
router.put('/:id_trial', trialController.updateTrial);

/**
 * @swagger
 * /trial/{id_trial}:
 *   delete:
 *     summary: Excluir um trial
 *     tags: [Trial]
 *     parameters:
 *       - in: path
 *         name: id_trial
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Trial excluído com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Trial não encontrado
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
router.delete('/:id_trial', trialController.deleteTrial);

module.exports = router;
