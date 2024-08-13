const express = require('express');
const router = express.Router();
const {
  criarProjeto,
  obterProjetos,
  obterProjetoPorId,
  atualizarProjeto,
  deletarProjeto,
} = require('../controllers/project/projetoController');

/**
 * @swagger
 * /projeto/cadastrar:
 *   post:
 *     summary: Cria um novo projeto
 *     tags: [Projetos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_projeto:
 *                 type: string
 *                 example: "Novo Projeto"
 *               descricao:
 *                 type: string
 *                 example: "Descrição detalhada do projeto"
 *               data_inicio:
 *                 type: string
 *                 format: date
 *                 example: "2024-08-13"
 *               data_fim:
 *                 type: string
 *                 format: date
 *                 example: "2024-12-31"
 *     responses:
 *       201:
 *         description: Projeto criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/cadastrar', criarProjeto);

/**
 * @swagger
 * /projeto:
 *   get:
 *     summary: Obtém todos os projetos
 *     tags: [Projetos]
 *     responses:
 *       200:
 *         description: Lista de projetos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_projeto:
 *                     type: integer
 *                     example: 1
 *                   nome_projeto:
 *                     type: string
 *                     example: "Novo Projeto"
 *                   descricao:
 *                     type: string
 *                     example: "Descrição detalhada do projeto"
 *                   data_inicio:
 *                     type: string
 *                     format: date
 *                     example: "2024-08-13"
 *                   data_fim:
 *                     type: string
 *                     format: date
 *                     example: "2024-12-31"
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', obterProjetos);

/**
 * @swagger
 * /projeto/{id_projeto}:
 *   get:
 *     summary: Obtém um projeto pelo ID
 *     tags: [Projetos]
 *     parameters:
 *       - in: path
 *         name: id_projeto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do projeto
 *     responses:
 *       200:
 *         description: Projeto retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_projeto:
 *                   type: integer
 *                   example: 1
 *                 nome_projeto:
 *                   type: string
 *                   example: "Novo Projeto"
 *                 descricao:
 *                   type: string
 *                   example: "Descrição detalhada do projeto"
 *                 data_inicio:
 *                   type: string
 *                   format: date
 *                   example: "2024-08-13"
 *                 data_fim:
 *                   type: string
 *                   format: date
 *                   example: "2024-12-31"
 *       404:
 *         description: Projeto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id_projeto', obterProjetoPorId);

/**
 * @swagger
 * /projeto/editar/{id_projeto}:
 *   put:
 *     summary: Atualiza um projeto pelo ID
 *     tags: [Projetos]
 *     parameters:
 *       - in: path
 *         name: id_projeto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do projeto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_projeto:
 *                 type: string
 *                 example: "Projeto Atualizado"
 *               descricao:
 *                 type: string
 *                 example: "Descrição atualizada do projeto"
 *               data_inicio:
 *                 type: string
 *                 format: date
 *                 example: "2024-08-15"
 *               data_fim:
 *                 type: string
 *                 format: date
 *                 example: "2024-12-31"
 *     responses:
 *       200:
 *         description: Projeto atualizado com sucesso
 *       404:
 *         description: Projeto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/editar/:id_projeto', atualizarProjeto);

/**
 * @swagger
 * /projeto/deletar/{id_projeto}:
 *   delete:
 *     summary: Deleta um projeto pelo ID
 *     tags: [Projetos]
 *     parameters:
 *       - in: path
 *         name: id_projeto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do projeto
 *     responses:
 *       200:
 *         description: Projeto deletado com sucesso
 *       404:
 *         description: Projeto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/deletar/:id_projeto', deletarProjeto);

module.exports = router;
