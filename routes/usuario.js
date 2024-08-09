const express = require('express');
const router = express.Router();
const { uploadFields } = require("../helpers/image-upload");

const {
  createUsuario,
  createMeuUsuario,
  updatePerfilUser,
  updateAvatar,
  getUsuarioDetalhado,
  deleteUsuarioMaster,
  deleteUsuarioSimples,
} = require('../controllers/usuario/userController');

/**
 * @swagger
 * /usuario/criar:
 *   post:
 *     summary: Cria um novo usuário com perfil de igreja
 *     tags: [Usuário]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
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
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       202:
 *         description: Usuário criado com sucesso
 *       409:
 *         description: Email já cadastrado
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/criar', uploadFields, createUsuario);

/**
 * @swagger
 * /usuario/meu-usuario:
 *   post:
 *     summary: Cria um novo usuário simples
 *     tags: [Usuário]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
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
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       202:
 *         description: Usuário criado com sucesso
 *       409:
 *         description: Email já cadastrado
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/meu-usuario', uploadFields, createMeuUsuario);

/**
 * @swagger
 * /usuario/perfil-user/{id_user}:
 *   put:
 *     summary: Atualiza o perfil de um usuário
 *     tags: [Usuário]
 *     parameters:
 *       - in: path
 *         name: id_user
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
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
 *         description: Perfil atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/perfil-user/:id_user', updatePerfilUser);

/**
 * @swagger
 * /usuario/avatar/{id_user}:
 *   put:
 *     summary: Atualiza o avatar de um usuário
 *     tags: [Usuário]
 *     parameters:
 *       - in: path
 *         name: id_user
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Avatar atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/avatar/:id_user', uploadFields, updateAvatar);

/**
 * @swagger
 * /usuario/{id_user}:
 *   get:
 *     summary: Obtém detalhes completos de um usuário
 *     tags: [Usuário]
 *     parameters:
 *       - in: path
 *         name: id_user
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Detalhes do usuário retornados com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id_user', getUsuarioDetalhado);

/**
 * @swagger
 * /usuario/delete/usuario-master/{id_user}:
 *   delete:
 *     summary: Deleta um usuário e todas as suas associações
 *     tags: [Usuário]
 *     parameters:
 *       - in: path
 *         name: id_user
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário e associações deletadas com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/delete/usuario-master/:id_user', deleteUsuarioMaster);

/**
 * @swagger
 * /usuario/delete/usuario-simples/{id_user}:
 *   delete:
 *     summary: Deleta um usuário simples e suas associações
 *     tags: [Usuário]
 *     parameters:
 *       - in: path
 *         name: id_user
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário e associações deletadas com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/delete/usuario-simples/:id_user', deleteUsuarioSimples);

module.exports = router;