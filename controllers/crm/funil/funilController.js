const Funil = require("../../../models/crm/tb_funil");

const criarFunil = async (req, res, next) => {
  try {
    const { funil } = req.body;

    if (!funil) {
      return res.status(400).json({ error: "O campo funil é obrigatório." });
    }

    const novoFunil = await Funil.create({ funil });

    return res
      .status(201)
      .json({ message: "Funil criado com sucesso!", funil: novoFunil });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterFunis = async (req, res, next) => {
  try {
    const funis = await Funil.findAll();

    return res.status(200).json(funis);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterFunilPorId = async (req, res, next) => {
  try {
    const { id_funil } = req.params;

    const funil = await Funil.findByPk(id_funil);

    if (!funil) {
      return res.status(404).json({ message: "Funil não encontrado." });
    }

    return res.status(200).json(funil);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const atualizarFunil = async (req, res, next) => {
  try {
    const { id_funil } = req.params;
    const { funil } = req.body;

    const funilExistente = await Funil.findByPk(id_funil);

    if (!funilExistente) {
      return res.status(404).json({ message: "Funil não encontrado." });
    }

    if (funil) funilExistente.funil = funil;

    await funilExistente.save();

    return res.status(200).json({
      message: "Funil atualizado com sucesso!",
      funil: funilExistente,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletarFunil = async (req, res, next) => {
  try {
    const { id_funil } = req.params;

    const funilExistente = await Funil.findByPk(id_funil);

    if (!funilExistente) {
      return res.status(404).json({ message: "Funil não encontrado." });
    }

    await funilExistente.destroy();

    return res.status(200).json({ message: "Funil deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarFunil,
  obterFunis,
  obterFunilPorId,
  atualizarFunil,
  deletarFunil,
};
