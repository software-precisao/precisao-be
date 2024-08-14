const Avatar = require("../../models/tb_avatar");
const path = require("path");

const getAvatars = async (req, res) => {
  try {
    const avatars = await Avatar.findAll();
    return res.status(200).json(avatars);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAvatarById = async (req, res) => {
  try {
    const { id_avatar } = req.params;
    const avatar = await Avatar.findByPk(id_avatar);
    if (!avatar) {
      return res.status(404).json({ message: "Avatar não encontrado" });
    }
    return res.status(200).json(avatar);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createAvatar = async (req, res) => {
  try {
    const { id_user } = req.body;
    const avatarPath = req.files?.avatar ? req.files.avatar[0].path : null;

    const newAvatar = await Avatar.create({
      avatar: avatarPath,
      id_user: id_user,
    });

    return res.status(201).json(newAvatar);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateAvatar = async (req, res) => {
  try {
    const { id_avatar } = req.params;
    const { id_user } = req.body;
    const avatarPath = req.files?.avatar ? req.files.avatar[0].path : null;

    const existingAvatar = await Avatar.findByPk(id_avatar);
    if (!existingAvatar) {
      return res.status(404).json({ message: "Avatar não encontrado" });
    }

    existingAvatar.avatar = avatarPath || existingAvatar.avatar;
    existingAvatar.id_user = id_user || existingAvatar.id_user;

    await existingAvatar.save();
    return res.status(200).json(existingAvatar);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteAvatar = async (req, res) => {
  try {
    const { id_avatar } = req.params;
    const avatar = await Avatar.findByPk(id_avatar);
    if (!avatar) {
      return res.status(404).json({ message: "Avatar não encontrado" });
    }

    await avatar.destroy();
    return res.status(200).json({ message: "Avatar excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAvatars,
  getAvatarById,
  createAvatar,
  updateAvatar,
  deleteAvatar,
};
