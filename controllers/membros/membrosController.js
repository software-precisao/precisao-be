const Membro = require("../../models/tb_membros");

const criarMembro = async (req, res) => {
  try {
    const membro = await Membro.create(req.body);
    return res.status(201).send({ message: "Membro criado com sucesso!", membro });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterMembroPorId = async (req, res) => {
  try {
    const { id_membro } = req.params;
    const membro = await Membro.findByPk(id_membro);
    if (!membro) {
      return res.status(404).send({ message: "Membro não encontrado" });
    }
    return res.status(200).send({ membro });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const listarMembros = async (req, res) => {
  try {
    const membros = await Membro.findAll();
    return res.status(200).send({ membros });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarMembro = async (req, res) => {
  try {
    const { id_membro } = req.params;
    const membro = await Membro.findByPk(id_membro);
    if (!membro) {
      return res.status(404).send({ message: "Membro não encontrado" });
    }
    await membro.update(req.body);
    return res.status(200).send({ message: "Membro atualizado com sucesso!", membro });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarMembro = async (req, res) => {
  try {
    const { id_membro } = req.params;
    const membro = await Membro.findByPk(id_membro);
    if (!membro) {
      return res.status(404).send({ message: "Membro não encontrado" });
    }
    await membro.destroy();
    return res.status(200).send({ message: "Membro deletado com sucesso!" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  criarMembro,
  obterMembroPorId,
  listarMembros,
  atualizarMembro,
  deletarMembro,
};
