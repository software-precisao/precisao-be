const Projeto = require("../../models/tb_projetos");

// Criar um novo projeto
const criarProjeto = async (req, res, next) => {
  try {
    const fileCapa = req.file ? req.file.filename : "default-capa.png";
    const fileLogo = req.file ? req.file.filename : "default-logo.png";

    const novoProjeto = await Projeto.create({
      nome_projeto: req.body.nome_projeto,
      valor_projeto: req.body.valor_projeto,
      descricao: req.body.descricao,
      valor_pago_inicial: req.body.valor_pago_inicial,
      logo: `/logo/${fileLogo}`,
      capa: `/capa/${fileCapa}`,
      linguagem: req.body.linguagem,
      repositorio_front: req.body.repositorio_front,
      repositorio_back: req.body.repositorio_back,
      link_miro: req.body.link_miro,
      link_jira: req.body.link_jira,
      status_projeto: req.body.status_projeto,
      data_inicio: req.body.data_inicio,
      data_fim: req.body.data_fim,
    });

    return res
      .status(201)
      .json({ message: "Projeto criado com sucesso!", projeto: novoProjeto });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obter todos os projetos
const obterProjetos = async (req, res, next) => {
  try {
    const projetos = await Projeto.findAll();

    return res.status(200).json(projetos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obter um projeto por ID
const obterProjetoPorId = async (req, res, next) => {
  try {
    const { id_projeto } = req.params;

    const projeto = await Projeto.findByPk(id_projeto);

    if (!projeto) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    return res.status(200).json(projeto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Atualizar um projeto por ID
const atualizarProjeto = async (req, res, next) => {
  try {
    const { id_projeto } = req.params;
    const {
      nome_projeto,
      valor_projeto,
      descricao,
      linguagem,
      repositorio_front,
      repositorio_back,
      link_miro,
      link_jira,
      status_projeto,
      data_inicio,
      data_fim,
    } = req.body;

    const projetoExistente = await Projeto.findByPk(id_projeto);

    if (!projetoExistente) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    projetoExistente.nome_projeto = nome_projeto;
    projetoExistente.valor_projeto = valor_projeto;
    projetoExistente.descricao = descricao;
    projetoExistente.linguagem = linguagem;
    projetoExistente.repositorio_front = repositorio_front;
    projetoExistente.repositorio_back = repositorio_back;
    projetoExistente.link_miro = link_miro;
    projetoExistente.link_jira = link_jira;
    projetoExistente.status_projeto = status_projeto;
    projetoExistente.data_inicio = data_inicio;
    projetoExistente.data_fim = data_fim;

    await projetoExistente.save();

    return res.status(200).json({
      message: "Projeto atualizado com sucesso!",
      projeto: projetoExistente,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Deletar um projeto por ID
const deletarProjeto = async (req, res, next) => {
  try {
    const { id_projeto } = req.params;

    const projetoExistente = await Projeto.findByPk(id_projeto);

    if (!projetoExistente) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    await projetoExistente.destroy();

    return res.status(200).json({ message: "Projeto deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarProjeto,
  obterProjetos,
  obterProjetoPorId,
  atualizarProjeto,
  deletarProjeto,
};
