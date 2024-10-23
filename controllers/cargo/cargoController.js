const Cargo = require("../../models/tb_cargo");

const getCargo = async (req, res) => {
  try {
    const cargo = await Cargo.findAll();
    return res.status(200).json(cargo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCargoById = async (req, res) => {
  try {
    const { id_cargo } = req.params;
    const cargo = await Cargo.findByPk(id_cargo);
    if (!cargo) {
      return res.status(404).json({ message: "Função não encontrada" });
    }
    return res.status(200).json(cargo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createCargo = async (req, res) => {
  try {
    const { cargo, observacoes } = req.body;
    const novacargo = await Cargo.create({
      cargo,
      observacoes
    });
    return res.status(201).json(novacargo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCargo = async (req, res) => {
  try {
    const { id_cargo } = req.params;
    const { cargo, observacoes } = req.body;

    const cargoExistente = await Cargo.findByPk(id_cargo);
    if (!cargoExistente) {
      return res.status(404).json({ message: "Função não encontrada" });
    }

    cargoExistente.cargo = cargo || cargoExistente.cargo;
    cargoExistente.observacoes = observacoes || cargoExistente.observacoes;

    await cargoExistente.save();
    return res.status(200).json(cargoExistente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCargo = async (req, res) => {
  try {
    const { id_cargo } = req.params;
    const cargo = await Cargo.findByPk(id_cargo);
    if (!cargo) {
      return res.status(404).json({ message: "Função não encontrada" });
    }

    await cargo.destroy();
    return res.status(200).json({ message: "Função excluída com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCargo,
  getCargoById,
  createCargo,
  updateCargo,
  deleteCargo,
};
