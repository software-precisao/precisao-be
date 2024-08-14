const express = require('express');
const router = express.Router();

const preferenceController = require('../controllers/preference/preferenceController');

/**
 * @swagger
 * tags:
 *   name: Preference
 *   description: Endpoints para gerenciar as preferências da igreja
 */

/**
 * @swagger
 * /preference/cadastrar:
 *   post:
 *     summary: Criar uma nova preferência da igreja
 *     tags: [Preference]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               toda_igreja:
 *                 type: integer
 *               gestao_kids:
 *                 type: integer
 *               secretaria:
 *                 type: integer
 *               tesouraria:
 *                 type: integer
 *               midia:
 *                 type: integer
 *               id_perfil_igreja:
 *                 type: integer
 *             required:
 *               - id_perfil_igreja
 *     responses:
 *       201:
 *         description: Preferência criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_preference:
 *                   type: integer
 *                 id_perfil_igreja:
 *                   type: integer
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
router.post('/cadastrar', preferenceController.createPreference);

/**
 * @swagger
 * /preference/:
 *   get:
 *     summary: Obter todas as preferências da igreja
 *     tags: [Preference]
 *     responses:
 *       200:
 *         description: Lista de preferências da igreja
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_preference:
 *                     type: integer
 *                   id_perfil_igreja:
 *                     type: integer
 *                   toda_igreja:
 *                     type: integer
 *                   gestao_kids:
 *                     type: integer
 *                   secretaria:
 *                     type: integer
 *                   tesouraria:
 *                     type: integer
 *                   midia:
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
router.get('/', preferenceController.getPreferences);

/**
 * @swagger
 * /preference/{id_preference}:
 *   get:
 *     summary: Obter uma preferência da igreja por ID
 *     tags: [Preference]
 *     parameters:
 *       - in: path
 *         name: id_preference
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Preferência encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_preference:
 *                   type: integer
 *                 id_perfil_igreja:
 *                   type: integer
 *                 toda_igreja:
 *                   type: integer
 *                 gestao_kids:
 *                   type: integer
 *                 secretaria:
 *                   type: integer
 *                 tesouraria:
 *                   type: integer
 *                 midia:
 *                   type: integer
 *       404:
 *         description: Preferência não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/:id_preference', preferenceController.getPreferenceById);

/**
 * @swagger
 * /preference/editar/{id_preference}:
 *   put:
 *     summary: Atualizar uma preferência da igreja por ID
 *     tags: [Preference]
 *     parameters:
 *       - in: path
 *         name: id_preference
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
 *               toda_igreja:
 *                 type: integer
 *               gestao_kids:
 *                 type: integer
 *               secretaria:
 *                 type: integer
 *               tesouraria:
 *                 type: integer
 *               midia:
 *                 type: integer
 *               id_perfil_igreja:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Preferência atualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_preference:
 *                   type: integer
 *                   description: ID da preferência atualizada
 *       404:
 *         description: Preferência não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
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
router.put('/editar/:id_preference', preferenceController.updatePreference);

/**
 * @swagger
 * /preference/deletar/{id_preference}:
 *   delete:
 *     summary: Deletar uma preferência da igreja por ID
 *     tags: [Preference]
 *     parameters:
 *       - in: path
 *         name: id_preference
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Preferência deletada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Preferência não encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
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
router.delete('/deletar/:id_preference', preferenceController.deletePreference);

module.exports = router;
