const Vendedor = require("../../../models/crm/tb_vendedor");

const getVendedores = async (req, res) => {
  try {
    const vendedores = await Vendedor.findAll();
    return res.status(200).json(vendedores);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getVendedorById = async (req, res) => {
  try {
    const { id_vendedor } = req.params;
    const vendedor = await Vendedor.findByPk(id_vendedor);
    if (!vendedor) {
      return res.status(404).json({ message: "Vendedor não encontrado" });
    }
    return res.status(200).json(vendedor);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createVendedor = async (req, res) => {
  try {
    const { vendedor_responsavel } = req.body;
    const newVendedor = await Vendedor.create({ vendedor_responsavel });
    return res.status(201).json(newVendedor);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateVendedor = async (req, res) => {
  try {
    const { id_vendedor } = req.params;
    const { vendedor_responsavel } = req.body;

    const existingVendedor = await Vendedor.findByPk(id_vendedor);
    if (!existingVendedor) {
      return res.status(404).json({ message: "Vendedor não encontrado" });
    }

    existingVendedor.vendedor_responsavel =
      vendedor_responsavel || existingVendedor.vendedor_responsavel;
    await existingVendedor.save();

    return res.status(200).json(existingVendedor);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteVendedor = async (req, res) => {
  try {
    const { id_vendedor } = req.params;
    const vendedor = await Vendedor.findByPk(id_vendedor);
    if (!vendedor) {
      return res.status(404).json({ message: "Vendedor não encontrado" });
    }
    await vendedor.destroy();
    return res.status(200).json({ message: "Vendedor excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getVendedores,
  getVendedorById,
  createVendedor,
  updateVendedor,
  deleteVendedor,
};
