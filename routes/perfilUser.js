const express = require('express');
const router = express.Router();

const perfilUserController = require('../controllers/perfil/perfilUserController');

/**
 * @swagger
 * tags:
 *   name: PerfilUser
 *   description: Endpoints para gerenciar o perfil dos usuários
 */

/**
 * @swagger
 * /perfil-user/cadastrar:
 *   post:
 *     summary: Criar um novo perfil de usuário
 *     tags: [PerfilUser]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               sobrenome:
 *                 type: string
 *               data_nascimento:
 *                 type: string
 *               genero:
 *                 type: string
 *               telefone1:
 *                 type: string
 *               telefone2:
 *                 type: string
 *             required:
 *               - nome
 *               - sobrenome
 *     responses:
 *       201:
 *         description: Perfil de usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_perfil_user:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sobrenome:
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
router.post('/cadastrar', perfilUserController.createPerfilUser);

/**
 * @swagger
 * /perfil-user/:
 *   get:
 *     summary: Obter todos os perfis de usuário
 *     tags: [PerfilUser]
 *     responses:
 *       200:
 *         description: Lista de perfis de usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_perfil_user:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   sobrenome:
 *                     type: string
 *                   data_nascimento:
 *                     type: string
 *                   genero:
 *                     type: string
 *                   telefone1:
 *                     type: string
 *                   telefone2:
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
router.get('/', perfilUserController.getPerfilUsers);

/**
 * @swagger
 * /perfil-user/{id_perfil_user}:
 *   get:
 *     summary: Obter um perfil de usuário por ID
 *     tags: [PerfilUser]
 *     parameters:
 *       - in: path
 *         name: id_perfil_user
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Perfil de usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_perfil_user:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sobrenome:
 *                   type: string
 *                 data_nascimento:
 *                   type: string
 *                 genero:
 *                   type: string
 *                 telefone1:
 *                   type: string
 *                 telefone2:
 *                   type: string
 *       404:
 *         description: Perfil de usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/:id_perfil_user', perfilUserController.getPerfilUserById);

/**
 * @swagger
 * /perfil-user/editar/{id_perfil_user}:
 *   put:
 *     summary: Atualizar um perfil de usuário por ID
 *     tags: [PerfilUser]
 *     parameters:
 *       - in: path
 *         name: id_perfil_user
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
 *               nome:
 *                 type: string
 *               sobrenome:
 *                 type: string
 *               data_nascimento:
 *                 type: string
 *               genero:
 *                 type: string
 *               telefone1:
 *                 type: string
 *               telefone2:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil de usuário atualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_perfil_user:
 *                   type: integer
 *                   description: ID do perfil de usuário atualizado
 *       404:
 *         description: Perfil de usuário não encontrado
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
router.put('/editar/:id_perfil_user', perfilUserController.updatePerfilUser);

/**
 * @swagger
 * /perfil-user/deletar/{id_perfil_user}:
 *   delete:
 *     summary: Deletar um perfil de usuário por ID
 *     tags: [PerfilUser]
 *     parameters:
 *       - in: path
 *         name: id_perfil_user
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Perfil de usuário deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Perfil de usuário não encontrado
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
router.delete('/deletar/:id_perfil_user', perfilUserController.deletePerfilUser);

module.exports = router;
