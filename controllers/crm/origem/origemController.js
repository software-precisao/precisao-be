const Origem = require("../../../models/crm/tb_origem");

const getOrigens = async (req, res) => {
  try {
    const origens = await Origem.findAll();
    return res.status(200).json(origens);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOrigemById = async (req, res) => {
  try {
    const { id_origem } = req.params;
    const origem = await Origem.findByPk(id_origem);
    if (!origem) {
      return res.status(404).json({ message: "Origem não encontrada" });
    }
    return res.status(200).json(origem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createOrigem = async (req, res) => {
  try {
    const { origem } = req.body;
    const newOrigem = await Origem.create({ origem });
    return res.status(201).json(newOrigem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateOrigem = async (req, res) => {
  try {
    const { id_origem } = req.params;
    const { origem } = req.body;

    const existingOrigem = await Origem.findByPk(id_origem);
    if (!existingOrigem) {
      return res.status(404).json({ message: "Origem não encontrada" });
    }

    existingOrigem.origem = origem || existingOrigem.origem;
    await existingOrigem.save();

    return res.status(200).json(existingOrigem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteOrigem = async (req, res) => {
  try {
    const { id_origem } = req.params;
    const origem = await Origem.findByPk(id_origem);
    if (!origem) {
      return res.status(404).json({ message: "Origem não encontrada" });
    }
    await origem.destroy();
    return res.status(200).json({ message: "Origem excluída com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOrigens,
  getOrigemById,
  createOrigem,
  updateOrigem,
  deleteOrigem,
};
