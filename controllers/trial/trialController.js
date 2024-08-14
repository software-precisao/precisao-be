const Trial = require("../../models/tb_trial");
const PerfilChurch = require("../../models/tb_perfil_igreja");

const getTrials = async (req, res) => {
  try {
    const trials = await Trial.findAll({
      include: {
        model: PerfilChurch,
        as: "perfilChurch", 
      },
    });
    return res.status(200).json(trials);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getTrialById = async (req, res) => {
  try {
    const { id_trial } = req.params;
    const trial = await Trial.findByPk(id_trial, {
      include: {
        model: PerfilChurch,
        as: "perfilChurch",  
      },
    });
    if (!trial) {
      return res.status(404).json({ message: "Trial não encontrado" });
    }
    return res.status(200).json(trial);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createTrial = async (req, res) => {
  try {
    const { data_inicio, status, id_perfil_igreja } = req.body;

    const newTrial = await Trial.create({
      data_inicio,
      status,
      id_perfil_igreja,
    });

    return res.status(201).json(newTrial);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateTrial = async (req, res) => {
  try {
    const { id_trial } = req.params;
    const { data_inicio, status, id_perfil_igreja } = req.body;

    const existingTrial = await Trial.findByPk(id_trial);
    if (!existingTrial) {
      return res.status(404).json({ message: "Trial não encontrado" });
    }

    existingTrial.data_inicio = data_inicio || existingTrial.data_inicio;
    existingTrial.status = status || existingTrial.status;
    existingTrial.id_perfil_igreja = id_perfil_igreja || existingTrial.id_perfil_igreja;

    await existingTrial.save();
    return res.status(200).json(existingTrial);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteTrial = async (req, res) => {
  try {
    const { id_trial } = req.params;
    const trial = await Trial.findByPk(id_trial);
    if (!trial) {
      return res.status(404).json({ message: "Trial não encontrado" });
    }

    await trial.destroy();
    return res.status(200).json({ message: "Trial excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTrials,
  getTrialById,
  createTrial,
  updateTrial,
  deleteTrial,
};
