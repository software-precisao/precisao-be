const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario/userController");

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints para gerenciar os usuários
 */

/**
 * @swagger
 * /usuario/cadastrar:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     description: Cria um novo usuário com informações de autenticação, perfil e preferências.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do usuário
 *               senha:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *               sobrenome:
 *                 type: string
 *                 description: Sobrenome do usuário
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *                 description: Data de nascimento do usuário
 *               genero:
 *                 type: string
 *                 description: Gênero do usuário
 *               telefone1:
 *                 type: string
 *                 description: Primeiro telefone do usuário
 *               telefone2:
 *                 type: string
 *                 description: Segundo telefone do usuário
 *               nome_igreja:
 *                 type: string
 *                 description: Nome da igreja
 *               toda_igreja:
 *                 type: boolean
 *                 description: Preferência de toda a igreja
 *               gestao_kids:
 *                 type: boolean
 *                 description: Preferência de gestão de crianças
 *               secretaria:
 *                 type: boolean
 *                 description: Preferência de secretaria
 *               tesouraria:
 *                 type: boolean
 *                 description: Preferência de tesouraria
 *               midia:
 *                 type: boolean
 *                 description: Preferência de mídia
 *               id_nivel:
 *                 type: integer
 *                 description: Nível do usuário
 *               id_plano:
 *                 type: integer
 *                 description: Plano do usuário
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                 usuarioCriado:
 *                   type: object
 *                   properties:
 *                     id_user:
 *                       type: integer
 *                     nome:
 *                       type: string
 *                     email:
 *                       type: string
 *                     nivel:
 *                       type: integer
 *                     avatar:
 *                       type: string
 *                     preference:
 *                       type: integer
 *                     logo:
 *                       type: string
 *                     id_perfil_user:
 *                       type: integer
 *                     id_perfil_igreja:
 *                       type: integer
 *                     trial:
 *                       type: integer
 *                     start:
 *                       type: integer
 *                     code:
 *                       type: string
 *       409:
 *         description: Email já cadastrado
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/cadastrar", usuarioController.createUsuario);

/**
 * @swagger
 * paths:
 *   /usuario/cadastrar-admin:
 *     post:
 *       summary: "Cadastrar um novo usuário administrador"
 *       description: "Esta rota permite que um administrador cadastre um novo usuário no sistema, incluindo informações pessoais e preferências da igreja."
 *       tags:
 *         - "Usuários"
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: "usuario@exemplo.com"
 *                 senha:
 *                   type: string
 *                   example: "senhaSecreta123"
 *                 nome:
 *                   type: string
 *                   example: "ragner"
 *                 sobrenome:
 *                   type: string
 *                   example: "moura"
 *                 data_nascimento:
 *                   type: string
 *                   format: date
 *                   example: "1990-01-01"
 *                 genero:
 *                   type: string
 *                   example: "masculino"
 *                 telefone1:
 *                   type: string
 *                   example: "123456789"
 *                 telefone2:
 *                   type: string
 *                   example: "987654321"
 *                 avatar:
 *                   type: string
 *                   format: binary
 *                   description: "Arquivo de avatar ou logo (opcional)"
 *               required:
 *                 - email
 *                 - senha
 *                 - nome
 *                 - sobrenome
 *       responses:
 *         200:
 *           description: "Usuário cadastrado com sucesso"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   mensagem:
 *                     type: string
 *                     example: "Usuário cadastrado com sucesso"
 *                   usuarioCriado:
 *                     type: object
 *                     properties:
 *                       id_user:
 *                         type: integer
 *                         example: 1
 *                       nome:
 *                         type: string
 *                         example: "Nome"
 *                       email:
 *                         type: string
 *                         example: "usuario@exemplo.com"
 *                       nivel:
 *                         type: integer
 *                         example: 1
 *                       avatar:
 *                         type: string
 *                         example: "/avatar/default-avatar.png"
 *                       preference:
 *                         type: integer
 *                         example: 1
 *                       code:
 *                         type: string
 *                         example: "1234"
 *         409:
 *           description: "Email já cadastrado"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   mensagem:
 *                     type: string
 *                     example: "Email já cadastrado, por favor insira um email diferente!"
 *         500:
 *           description: "Erro interno do servidor"
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: "Erro ao criar usuário"
 */

router.post("/cadastrar-admin", usuarioController.createUsuarioAdmin);

/**
 * @swagger
 * /usuario/cadastrar-meu-usuario:
 *   post:
 *     summary: Cria um novo usuário com perfil
 *     tags: [Usuários]
 *     description: Cria um novo usuário com informações básicas e perfil.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do usuário
 *               senha:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *               sobrenome:
 *                 type: string
 *                 description: Sobrenome do usuário
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *                 description: Data de nascimento do usuário
 *               genero:
 *                 type: string
 *                 description: Gênero do usuário
 *               telefone1:
 *                 type: string
 *                 description: Primeiro telefone do usuário
 *               telefone2:
 *                 type: string
 *                 description: Segundo telefone do usuário
 *               id_perfil_igreja:
 *                 type: integer
 *                 description: ID do perfil da igreja
 *               id_nivel:
 *                 type: integer
 *                 description: Nível do usuário
 *               id_plano:
 *                 type: integer
 *                 description: Plano do usuário
 *     responses:
 *       202:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                 usuarioCriado:
 *                   type: object
 *                   properties:
 *                     id_user:
 *                       type: integer
 *                     nome:
 *                       type: string
 *                     email:
 *                       type: string
 *                     nivel:
 *                       type: integer
 *                     avatar:
 *                       type: string
 *                     id_perfil_user:
 *                       type: integer
 *                     id_perfil_igreja:
 *                       type: integer
 *                     code:
 *                       type: string
 *       409:
 *         description: Email já cadastrado
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/cadastrar-meu-usuario", usuarioController.createMeuUsuario);

/**
 * @swagger
 * /usuario/{id_user}/perfil:
 *   put:
 *     summary: Atualiza o perfil do usuário
 *     tags: [Usuários]
 *     description: Atualiza informações do perfil do usuário, como nome e telefone.
 *     parameters:
 *       - name: id_user
 *         in: path
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
 *                 description: Nome do usuário
 *               sobrenome:
 *                 type: string
 *                 description: Sobrenome do usuário
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *                 description: Data de nascimento do usuário
 *               genero:
 *                 type: string
 *                 description: Gênero do usuário
 *               telefone1:
 *                 type: string
 *                 description: Primeiro telefone do usuário
 *               telefone2:
 *                 type: string
 *                 description: Segundo telefone do usuário
 *     responses:
 *       200:
 *         description: Perfil do usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_user:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 sobrenome:
 *                   type: string
 *                 data_nascimento:
 *                   type: string
 *                   format: date
 *                 genero:
 *                   type: string
 *                 telefone1:
 *                   type: string
 *                 telefone2:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/usuario/{id_user}/perfil", usuarioController.updateAvatar);

/**
 * @swagger
 * /usuario/{id_user}:
 *   get:
 *     summary: Obtém detalhes do usuário
 *     tags: [Usuários]
 *     description: Retorna informações detalhadas de um usuário, incluindo perfil, preferências e código.
 *     parameters:
 *       - name: id_user
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Detalhes do usuário obtidos com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_user:
 *                   type: integer
 *                 auth:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                 perfilUser:
 *                   type: object
 *                   properties:
 *                     nome:
 *                       type: string
 *                     sobrenome:
 *                       type: string
 *                     data_nascimento:
 *                       type: string
 *                       format: date
 *                     genero:
 *                       type: string
 *                     telefone1:
 *                       type: string
 *                     telefone2:
 *                       type: string
 *                 perfilIgreja:
 *                   type: object
 *                   properties:
 *                     nome_igreja:
 *                       type: string
 *                 trial:
 *                   type: object
 *                   properties:
 *                     id_trial:
 *                       type: integer
 *                 intro:
 *                   type: object
 *                   properties:
 *                     id_intro:
 *                       type: integer
 *                 avatar:
 *                   type: object
 *                   properties:
 *                     avatar:
 *                       type: string
 *                 code:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/usuario/:id_user", usuarioController.getUsuarioDetalhado);

/**
 * @swagger
 * /usuario/deletar-simples/{id_user}:
 *   delete:
 *     summary: Exclui um usuário simples
 *     tags: [Usuários]
 *     description: Exclui um usuário do sistema sem considerar dependências de outras tabelas.
 *     parameters:
 *       - name: id_user
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete(
  "/usuario/deletar-simples/:id_user",
  usuarioController.deleteUsuarioSimples
);

/**
 * @swagger
 * /usuario/deletar-master/{id_user}:
 *   delete:
 *     summary: Exclui um usuário mestre
 *     tags: [Usuários]
 *     description: Exclui um usuário mestre do sistema e garante a limpeza completa de dados associados.
 *     parameters:
 *       - name: id_user
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário mestre excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete(
  "/usuario/deletar-master/:id_user",
  usuarioController.deleteUsuarioMaster
);

module.exports = router;
