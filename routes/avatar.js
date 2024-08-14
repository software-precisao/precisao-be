const express = require("express");
const router = express.Router();
const { uploadFields } = require("../helpers/image-upload");
const avatarController = require("../controllers/avatar/avatarController");

/**
 * @swagger
 * /avatar:
 *   get:
 *     summary: Retorna todos os avatares
 *     tags: [Avatars]
 *     responses:
 *       200:
 *         description: Lista de todos os avatares
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Avatar'
 */
router.get("/", avatarController.getAvatars);

/**
 * @swagger
 * /avatar/{id_avatar}:
 *   get:
 *     summary: Retorna um avatar específico
 *     tags: [Avatars]
 *     parameters:
 *       - in: path
 *         name: id_avatar
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do avatar
 *     responses:
 *       200:
 *         description: Um avatar
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avatar'
 *       404:
 *         description: Avatar não encontrado
 */
router.get("/:id_avatar", avatarController.getAvatarById);

/**
 * @swagger
 * /avatar/cadastrar:
 *   post:
 *     summary: Cria um novo avatar
 *     tags: [Avatars]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *               id_user:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Avatar criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avatar'
 *       500:
 *         description: Erro ao criar o avatar
 */
router.post("/cadastrar", uploadFields, avatarController.createAvatar);

/**
 * @swagger
 * /avatar/editar/{id_avatar}:
 *   put:
 *     summary: Atualiza um avatar existente
 *     tags: [Avatars]
 *     parameters:
 *       - in: path
 *         name: id_avatar
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do avatar
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *               id_user:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Avatar atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avatar'
 *       404:
 *         description: Avatar não encontrado
 *       500:
 *         description: Erro ao atualizar o avatar
 */
router.put("/editar/:id_avatar", uploadFields, avatarController.updateAvatar);

/**
 * @swagger
 * /avatar/deletar/{id_avatar}:
 *   delete:
 *     summary: Deleta um avatar
 *     tags: [Avatars]
 *     parameters:
 *       - in: path
 *         name: id_avatar
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do avatar
 *     responses:
 *       200:
 *         description: Avatar deletado com sucesso
 *       404:
 *         description: Avatar não encontrado
 */
router.delete("/deletar/:id_avatar", avatarController.deleteAvatar);

module.exports = router;
