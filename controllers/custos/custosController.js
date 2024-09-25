const Custo = require("../../models/tb_custos");

const getCustos = async (req, res) => {
  try {
    const custos = await Custo.findAll();
    return res.status(200).json(custos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCustoById = async (req, res) => {
  try {
    const { id_custo } = req.params;
    const custo = await Custo.findByPk(id_custo);
    if (!custo) {
      return res.status(404).json({ message: "Custo não encontrado" });
    }
    return res.status(200).json(custo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createCusto = async (req, res) => {
  try {
    const { tipo, descricao, valor } = req.body;

    const novoCusto = await Custo.create({
      tipo,
      descricao,
      valor,
    });

    return res.status(201).json(novoCusto);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCusto = async (req, res) => {
  try {
    const { id_custo } = req.params;
    const { tipo, descricao, valor } = req.body;

    const custoExistente = await Custo.findByPk(id_custo);
    if (!custoExistente) {
      return res.status(404).json({ message: "Custo não encontrado" });
    }

    custoExistente.tipo = tipo || custoExistente.tipo;
    custoExistente.descricao = descricao || custoExistente.descricao;
    custoExistente.valor = valor || custoExistente.valor;

    await custoExistente.save();

    return res.status(200).json(custoExistente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCusto = async (req, res) => {
  try {
    const { id_custo } = req.params;
    const custo = await Custo.findByPk(id_custo);
    if (!custo) {
      return res.status(404).json({ message: "Custo não encontrado" });
    }

    await custo.destroy();
    return res.status(200).json({ message: "Custo excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCustos,
  getCustoById,
  createCusto,
  updateCusto,
  deleteCusto,
};
