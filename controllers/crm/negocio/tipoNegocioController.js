const TipoNegocio = require("../../../models/crm/tb_tipo_negocio");

const getTiposNegocio = async (req, res) => {
  try {
    const tipos = await TipoNegocio.findAll();
    return res.status(200).json(tipos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getTipoNegocioById = async (req, res) => {
  try {
    const { id_tipo_negocio } = req.params;
    const tipo = await TipoNegocio.findByPk(id_tipo_negocio);
    if (!tipo) {
      return res
        .status(404)
        .json({ message: "Tipo de negócio não encontrado" });
    }
    return res.status(200).json(tipo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createTipoNegocio = async (req, res) => {
  try {
    const { tipo } = req.body;
    const newTipo = await TipoNegocio.create({ tipo });
    return res.status(201).json(newTipo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateTipoNegocio = async (req, res) => {
  try {
    const { id_tipo_negocio } = req.params;
    const { tipo } = req.body;

    const existingTipo = await TipoNegocio.findByPk(id_tipo_negocio);
    if (!existingTipo) {
      return res
        .status(404)
        .json({ message: "Tipo de negócio não encontrado" });
    }

    existingTipo.tipo = tipo || existingTipo.tipo;
    await existingTipo.save();

    return res.status(200).json(existingTipo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteTipoNegocio = async (req, res) => {
  try {
    const { id_tipo_negocio } = req.params;
    const tipo = await TipoNegocio.findByPk(id_tipo_negocio);
    if (!tipo) {
      return res
        .status(404)
        .json({ message: "Tipo de negócio não encontrado" });
    }
    await tipo.destroy();
    return res
      .status(200)
      .json({ message: "Tipo de negócio excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTiposNegocio,
  getTipoNegocioById,
  createTipoNegocio,
  updateTipoNegocio,
  deleteTipoNegocio,
};
