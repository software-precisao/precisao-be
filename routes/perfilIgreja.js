const express = require('express');
const router = express.Router();
const { uploadFields } = require("../helpers/image-upload");

const {
  createPerfilIgreja,
  getPerfisIgreja,
  getPerfilIgrejaById,
  updatePerfilIgreja,
  deletePerfilIgreja,
  updateLogo
} = require('../controllers/perfil/perfilChurchController');

/**
 * @swagger
 * tags:
 *   name: Perfil Igreja
 *   description: Endpoints para gerenciar o perfil da igreja
 */

/**
 * @swagger
 * /perfil-igreja/cadastrar:
 *   post:
 *     summary: Criar um novo perfil da igreja
 *     tags: [Perfil Igreja]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_igreja:
 *                 type: string
 *               qtd_membros:
 *                 type: integer
 *               cnpj:
 *                 type: string
 *               nif:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email_igreja:
 *                 type: string
 *               website:
 *                 type: string
 *               instagram:
 *                 type: string
 *               facebook:
 *                 type: string
 *             required:
 *               - nome_igreja
 *               - cnpj
 *               - email_igreja
 *     responses:
 *       201:
 *         description: Perfil da igreja criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_perfil_igreja:
 *                   type: integer
 *                 nome_igreja:
 *                   type: string
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
router.post('/cadastrar', createPerfilIgreja);

/**
 * @swagger
 * /perfil-igreja/:
 *   get:
 *     summary: Obter todos os perfis da igreja
 *     tags: [Perfil Igreja]
 *     responses:
 *       200:
 *         description: Lista de perfis da igreja
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_perfil_igreja:
 *                     type: integer
 *                   nome_igreja:
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
router.get('/', getPerfisIgreja);

/**
 * @swagger
 * /perfil-igreja/{id_perfil_igreja}:
 *   get:
 *     summary: Obter um perfil da igreja por ID
 *     tags: [Perfil Igreja]
 *     parameters:
 *       - in: path
 *         name: id_perfil_igreja
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Perfil da igreja encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_perfil_igreja:
 *                   type: integer
 *                 nome_igreja:
 *                   type: string
 *       404:
 *         description: Perfil da igreja não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/:id_perfil_igreja', getPerfilIgrejaById);

/**
 * @swagger
 * /perfil-igreja/editar/{id_perfil_igreja}:
 *   put:
 *     summary: Atualizar um perfil da igreja por ID
 *     tags: [Perfil Igreja]
 *     parameters:
 *       - in: path
 *         name: id_perfil_igreja
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
 *               nome_igreja:
 *                 type: string
 *               qtd_membros:
 *                 type: integer
 *               cnpj:
 *                 type: string
 *               nif:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email_igreja:
 *                 type: string
 *               website:
 *                 type: string
 *               instagram:
 *                 type: string
 *               facebook:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil da igreja atualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_perfil_igreja:
 *                   type: integer
 *                   description: ID do perfil atualizado
 *       404:
 *         description: Perfil da igreja não encontrado
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
router.put('/editar/:id_perfil_igreja', updatePerfilIgreja);

/**
 * @swagger
 * /perfil-igreja/deletar/{id_perfil_igreja}:
 *   delete:
 *     summary: Deletar um perfil da igreja por ID
 *     tags: [Perfil Igreja]
 *     parameters:
 *       - in: path
 *         name: id_perfil_igreja
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Perfil da igreja deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Perfil da igreja não encontrado
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
router.delete('/deletar/:id_perfil_igreja', deletePerfilIgreja);

/**
 * @swagger
 * /perfil-igreja/editar/{id_perfil_igreja}/logo:
 *   put:
 *     summary: Atualizar a logo da igreja
 *     tags: [Perfil Igreja]
 *     parameters:
 *       - in: path
 *         name: id_perfil_igreja
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               logo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Logo atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logo:
 *                   type: string
 *       404:
 *         description: Perfil não encontrado
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
router.put('/editar/:id_perfil_igreja/logo', uploadFields, updateLogo);

module.exports = router;
