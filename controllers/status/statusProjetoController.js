const StatusProjeto = require("../../models/tb_status_projeto");

const criarStatusProjeto = async (req, res) => {
  try {
    const { status } = req.body;
    const novoStatus = await StatusProjeto.create({ status });
    return res.status(201).json(novoStatus);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao criar status do projeto", error });
  }
};

const listarStatusProjetos = async (req, res) => {
  try {
    const statusProjetos = await StatusProjeto.findAll();
    return res.status(200).json(statusProjetos);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao listar status dos projetos", error });
  }
};

const obterStatusProjetoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const statusProjeto = await StatusProjeto.findByPk(id);

    if (!statusProjeto) {
      return res
        .status(404)
        .json({ message: "Status do projeto não encontrado" });
    }

    return res.status(200).json(statusProjeto);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao obter status do projeto", error });
  }
};

const atualizarStatusProjeto = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const statusProjeto = await StatusProjeto.findByPk(id);

    if (!statusProjeto) {
      return res
        .status(404)
        .json({ message: "Status do projeto não encontrado" });
    }

    await statusProjeto.update({ status });
    return res
      .status(200)
      .json({ message: "Status do projeto atualizado com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao atualizar status do projeto", error });
  }
};

const deletarStatusProjeto = async (req, res) => {
  try {
    const { id } = req.params;
    const statusProjeto = await StatusProjeto.findByPk(id);

    if (!statusProjeto) {
      return res
        .status(404)
        .json({ message: "Status do projeto não encontrado" });
    }

    await statusProjeto.destroy();
    return res
      .status(200)
      .json({ message: "Status do projeto deletado com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao deletar status do projeto", error });
  }
};

module.exports = {
  criarStatusProjeto,
  listarStatusProjetos,
  obterStatusProjetoPorId,
  atualizarStatusProjeto,
  deletarStatusProjeto,
};
