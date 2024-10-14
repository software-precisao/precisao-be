const Vendedor = require("../../../models/crm/tb_desenvolvedor");

const getDesenvolvedores = async (req, res) => {
  try {
    const desenvolvedores = await Vendedor.findAll();
    return res.status(200).json(desenvolvedores);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getDesenvolvedorById = async (req, res) => {
  try {
    const { id_dev } = req.params;
    const desenvolvedor = await Vendedor.findByPk(id_dev);
    if (!desenvolvedor) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado" });
    }
    return res.status(200).json(desenvolvedor);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createDesenvolvedor = async (req, res) => {
  try {
    const { desenvolvedor, valor_hora } = req.body;
    const novoDesenvolvedor = await Vendedor.create({
      desenvolvedor,
      valor_hora,
    });
    return res.status(201).json(novoDesenvolvedor);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateDesenvolvedor = async (req, res) => {
  try {
    const { id_dev } = req.params;
    const { desenvolvedor, valor_hora } = req.body;

    const desenvolvedorExistente = await Vendedor.findByPk(id_dev);
    if (!desenvolvedorExistente) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado" });
    }

    desenvolvedorExistente.desenvolvedor =
      desenvolvedor || desenvolvedorExistente.desenvolvedor;
    desenvolvedorExistente.valor_hora =
      valor_hora || desenvolvedorExistente.valor_hora;

    await desenvolvedorExistente.save();
    return res.status(200).json(desenvolvedorExistente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteDesenvolvedor = async (req, res) => {
  try {
    const { id_dev } = req.params;
    const desenvolvedor = await Vendedor.findByPk(id_dev);
    if (!desenvolvedor) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado" });
    }
    await desenvolvedor.destroy();
    return res
      .status(200)
      .json({ message: "Desenvolvedor excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDesenvolvedores,
  getDesenvolvedorById,
  createDesenvolvedor,
  updateDesenvolvedor,
  deleteDesenvolvedor,
};
