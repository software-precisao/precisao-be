const Compromisso = require("../../models/compromisso");

const criarCompromisso = async (req, res) => {
  try {
    const compromisso = await Compromisso.create(req.body);
    return res.status(201).send({ message: "Compromisso criado com sucesso", compromisso });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterTodosCompromissos = async (req, res) => {
  try {
    const compromissos = await Compromisso.findAll();
    return res.status(200).send(compromissos);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterCompromissoPorId = async (req, res) => {
  try {
    const { id_compromisso } = req.params;
    const compromisso = await Compromisso.findByPk(id_compromisso);
    if (!compromisso) {
      return res.status(404).send({ message: "Compromisso não encontrado" });
    }
    return res.status(200).send(compromisso);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarCompromisso = async (req, res) => {
  try {
    const { id_compromisso } = req.params;
    const compromisso = await Compromisso.findByPk(id_compromisso);
    if (!compromisso) {
      return res.status(404).send({ message: "Compromisso não encontrado" });
    }

    await compromisso.update(req.body);
    return res.status(200).send({ message: "Compromisso atualizado com sucesso", compromisso });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarCompromisso = async (req, res) => {
  try {
    const { id_compromisso } = req.params;
    const compromisso = await Compromisso.findByPk(id_compromisso);
    if (!compromisso) {
      return res.status(404).send({ message: "Compromisso não encontrado" });
    }

    await compromisso.destroy();
    return res.status(200).send({ message: "Compromisso deletado com sucesso" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  criarCompromisso,
  obterTodosCompromissos,
  obterCompromissoPorId,
  atualizarCompromisso,
  deletarCompromisso,
};
