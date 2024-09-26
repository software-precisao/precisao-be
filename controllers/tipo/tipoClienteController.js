const TipoCliente = require("../../models/tb_tipo");

const criarTipoCliente = async (req, res) => {
  try {
    const { tipo_cliente } = req.body;
    const novoTipoCliente = await TipoCliente.create({ tipo_cliente });
    return res.status(201).json(novoTipoCliente);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao criar tipo cliente", error });
  }
};

const listarTipoClientes = async (req, res) => {
  try {
    const tipoCliente = await TipoCliente.findAll();
    return res.status(200).json(tipoCliente);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao listar os tipos de cliente", error });
  }
};

const obterTipoClientePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoCliente = await TipoCliente.findByPk(id);

    if (!tipoCliente) {
      return res.status(404).json({ message: "Tipo cliente não encontrado" });
    }

    return res.status(200).json(tipoCliente);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao obter tipo do cliente", error });
  }
};

const atualizarTipoCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo_cliente } = req.body;

    const tipoCliente = await TipoCliente.findByPk(id);

    if (!tipoCliente) {
      return res.status(404).json({ message: "Tipo cliente não encontrado" });
    }

    await tipoCliente.update({ tipo_cliente });
    return res
      .status(200)
      .json({ message: "Tipo cliente atualizado com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao atualizar tipo cliente", error });
  }
};

const deletarTipoCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoCliente = await TipoCliente.findByPk(id);

    if (!tipoCliente) {
      return res.status(404).json({ message: "Tipo cliente não encontrado" });
    }

    await tipoCliente.destroy();
    return res
      .status(200)
      .json({ message: "Tipo cliente deletado com sucesso" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao deletar Tipo cliente", error });
  }
};

module.exports = {
  criarTipoCliente,
  listarTipoClientes,
  obterTipoClientePorId,
  atualizarTipoCliente,
  deletarTipoCliente,
};
