const Projeto = require("../../models/tb_projetos");
const StatusProjeto = require("../../models/tb_status_projeto");
const Linguagem = require("../../models/tb_linguagem")

const criarProjeto = async (req, res, next) => {
  try {
    const { id_status_projeto, id_cliente, nome_projeto, valor_projeto, id_linguagem } = req.body;

    if (!id_cliente || !nome_projeto || valor_projeto === undefined || !id_status_projeto || !id_linguagem) {
      return res.status(400).json({ error: "Os campos id_cliente, nome_projeto, valor_projeto, id_status_projeto e id_linguagem são obrigatórios." });
    }

    const statusExistente = await StatusProjeto.findByPk(id_status_projeto);
    if (!statusExistente) {
      return res.status(404).json({ error: "Status do projeto não encontrado." });
    }

    const linguagemExistente = await Linguagem.findByPk(id_linguagem);
    if (!linguagemExistente) {
      return res.status(404).json({ error: "Linguagem não encontrada." });
    }

    const fileCapa = req.file ? req.file.filename : "default-capa.png";
    const fileLogo = req.file ? req.file.filename : "default-logo.png";

    const novoProjeto = await Projeto.create({
      nome_projeto,
      valor_projeto,
      id_cliente,
      descricao: req.body.descricao,
      valor_pago_inicial: req.body.valor_pago_inicial,
      logo: `/logo/${fileLogo}`,
      capa: `/capa/${fileCapa}`,
      id_linguagem: req.body.id_linguagem,  
      repositorio_front: req.body.repositorio_front,
      repositorio_back: req.body.repositorio_back,
      link_miro: req.body.link_miro,
      link_jira: req.body.link_jira,
      id_status_projeto,
      data_inicio: req.body.data_inicio,
      data_fim: req.body.data_fim,
    });

    return res.status(201).json({ message: "Projeto criado com sucesso!", projeto: novoProjeto });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


const obterProjetos = async (req, res, next) => {
  try {
    const projetos = await Projeto.findAll({
      include: [
        {
          model: StatusProjeto,
          as: "statusProjeto",
          attributes: ["status"],
        },
      ],
    });

    return res.status(200).json(projetos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterProjetoPorId = async (req, res, next) => {
  try {
    const { id_projeto } = req.params;

    const projeto = await Projeto.findByPk(id_projeto, {
      include: [
        {
          model: StatusProjeto,
          as: "statusProjeto",
          attributes: ["status"],
        },
      ],
    });

    if (!projeto) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    return res.status(200).json(projeto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const atualizarProjeto = async (req, res, next) => {
  try {
    const { id_projeto } = req.params;
    const {
      nome_projeto,
      valor_projeto,
      descricao,
      id_cliente,
      id_linguagem,
      repositorio_front,
      repositorio_back,
      link_miro,
      link_jira,
      id_status_projeto,
      data_inicio,
      data_fim,
    } = req.body;

    const projetoExistente = await Projeto.findByPk(id_projeto);

    if (!projetoExistente) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    if (id_status_projeto) {
      const statusExistente = await StatusProjeto.findByPk(id_status_projeto);
      if (!statusExistente) {
        return res.status(404).json({ error: "Status do projeto não encontrado." });
      }
      projetoExistente.id_status_projeto = id_status_projeto; 
    }

    if (id_linguagem) {
      const linguagemExistente = await Linguagem.findByPk(id_linguagem);
      if (!linguagemExistente) {
        return res.status(404).json({ error: "Linguagem não encontrada." });
      }
      projetoExistente.id_linguagem = id_linguagem;
    }

    if (nome_projeto) projetoExistente.nome_projeto = nome_projeto;
    if (valor_projeto !== undefined) projetoExistente.valor_projeto = valor_projeto; 
    if (descricao) projetoExistente.descricao = descricao;
    if (id_cliente) projetoExistente.id_cliente = id_cliente;
    if (repositorio_front) projetoExistente.repositorio_front = repositorio_front;
    if (repositorio_back) projetoExistente.repositorio_back = repositorio_back;
    if (link_miro) projetoExistente.link_miro = link_miro;
    if (link_jira) projetoExistente.link_jira = link_jira;
    if (data_inicio) projetoExistente.data_inicio = data_inicio;
    if (data_fim) projetoExistente.data_fim = data_fim;

    await projetoExistente.save();

    return res.status(200).json({
      message: "Projeto atualizado com sucesso!",
      projeto: projetoExistente,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



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
