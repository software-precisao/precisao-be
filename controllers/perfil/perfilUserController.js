const PerfilUser = require("../../models/tb_perfil_user");

const getPerfilUsers = async (req, res) => {
  try {
    const perfilUsers = await PerfilUser.findAll();
    return res.status(200).json(perfilUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPerfilUserById = async (req, res) => {
  try {
    const { id_perfil_user } = req.params;
    const perfilUser = await PerfilUser.findByPk(id_perfil_user);
    if (!perfilUser) {
      return res.status(404).json({ message: "Perfil não encontrado" });
    }
    return res.status(200).json(perfilUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createPerfilUser = async (req, res) => {
  try {
    const { nome, sobrenome, data_nascimento, genero, telefone1, telefone2 } = req.body;
    const newPerfilUser = await PerfilUser.create({
      nome,
      sobrenome,
      data_nascimento,
      genero,
      telefone1,
      telefone2,
    });
    return res.status(201).json(newPerfilUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePerfilUser = async (req, res) => {
  try {
    const { id_perfil_user } = req.params;
    const { nome, sobrenome, data_nascimento, genero, telefone1, telefone2 } = req.body;

    const existingPerfilUser = await PerfilUser.findByPk(id_perfil_user);
    if (!existingPerfilUser) {
      return res.status(404).json({ message: "Perfil não encontrado" });
    }

    existingPerfilUser.nome = nome || existingPerfilUser.nome;
    existingPerfilUser.sobrenome = sobrenome || existingPerfilUser.sobrenome;
    existingPerfilUser.data_nascimento = data_nascimento || existingPerfilUser.data_nascimento;
    existingPerfilUser.genero = genero || existingPerfilUser.genero;
    existingPerfilUser.telefone1 = telefone1 || existingPerfilUser.telefone1;
    existingPerfilUser.telefone2 = telefone2 || existingPerfilUser.telefone2;

    await existingPerfilUser.save();
    return res.status(200).json(existingPerfilUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePerfilUser = async (req, res) => {
  try {
    const { id_perfil_user } = req.params;
    const perfilUser = await PerfilUser.findByPk(id_perfil_user);
    if (!perfilUser) {
      return res.status(404).json({ message: "Perfil não encontrado" });
    }

    await perfilUser.destroy();
    return res.status(200).json({ message: "Perfil excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPerfilUsers,
  getPerfilUserById,
  createPerfilUser,
  updatePerfilUser,
  deletePerfilUser,
};
