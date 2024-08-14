const Preference = require("../../models/tb_preference");
const Perfil = require("../../models/tb_perfil_igreja");

const getPreferences = async (req, res) => {
  try {
    const preferences = await Preference.findAll({
      include: [{ model: Perfil }],
    });
    return res.status(200).json(preferences);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPreferenceById = async (req, res) => {
  try {
    const { id_preference } = req.params;
    const preference = await Preference.findByPk(id_preference, {
      include: [{ model: Perfil }],
    });
    if (!preference) {
      return res.status(404).json({ message: "Preferência não encontrada" });
    }
    return res.status(200).json(preference);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createPreference = async (req, res) => {
  try {
    const { toda_igreja, gestao_kids, secretaria, tesouraria, midia, id_perfil_igreja } = req.body;
    const newPreference = await Preference.create({
      toda_igreja,
      gestao_kids,
      secretaria,
      tesouraria,
      midia,
      id_perfil_igreja,
    });
    return res.status(201).json(newPreference);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePreference = async (req, res) => {
  try {
    const { id_preference } = req.params;
    const { toda_igreja, gestao_kids, secretaria, tesouraria, midia, id_perfil_igreja } = req.body;

    const existingPreference = await Preference.findByPk(id_preference);
    if (!existingPreference) {
      return res.status(404).json({ message: "Preferência não encontrada" });
    }

    existingPreference.toda_igreja = toda_igreja || existingPreference.toda_igreja;
    existingPreference.gestao_kids = gestao_kids || existingPreference.gestao_kids;
    existingPreference.secretaria = secretaria || existingPreference.secretaria;
    existingPreference.tesouraria = tesouraria || existingPreference.tesouraria;
    existingPreference.midia = midia || existingPreference.midia;
    existingPreference.id_perfil_igreja = id_perfil_igreja || existingPreference.id_perfil_igreja;

    await existingPreference.save();
    return res.status(200).json(existingPreference);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePreference = async (req, res) => {
  try {
    const { id_preference } = req.params;
    const preference = await Preference.findByPk(id_preference);
    if (!preference) {
      return res.status(404).json({ message: "Preferência não encontrada" });
    }

    await preference.destroy();
    return res.status(200).json({ message: "Preferência excluída com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPreferences,
  getPreferenceById,
  createPreference,
  updatePreference,
  deletePreference,
};
