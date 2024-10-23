const Pregacao = require("../../models/pregacao");

const criarPregacao = async (req, res) => {
  try {
    const pregacao = await Pregacao.create(req.body);
    return res
      .status(201)
      .send({ message: "Pregação criada com sucesso", pregacao });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterTodasPregacoes = async (req, res) => {
  try {
    const pregacoes = await Pregacao.findAll();
    return res.status(200).send(pregacoes);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterPregacaoPorId = async (req, res) => {
  try {
    const { id_pregacao } = req.params;
    const pregacao = await Pregacao.findByPk(id_pregacao);
    if (!pregacao) {
      return res.status(404).send({ message: "Pregação não encontrada" });
    }
    return res.status(200).send(pregacao);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarPregacao = async (req, res) => {
  try {
    const { id_pregacao } = req.params;
    const pregacao = await Pregacao.findByPk(id_pregacao);
    if (!pregacao) {
      return res.status(404).send({ message: "Pregação não encontrada" });
    }

    await pregacao.update(req.body);
    return res
      .status(200)
      .send({ message: "Pregação atualizada com sucesso", pregacao });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarPregacao = async (req, res) => {
  try {
    const { id_pregacao } = req.params;
    const pregacao = await Pregacao.findByPk(id_pregacao);
    if (!pregacao) {
      return res.status(404).send({ message: "Pregação não encontrada" });
    }

    await pregacao.destroy();
    return res.status(200).send({ message: "Pregação deletada com sucesso" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  criarPregacao,
  obterTodasPregacoes,
  obterPregacaoPorId,
  atualizarPregacao,
  deletarPregacao,
};
