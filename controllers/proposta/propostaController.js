const Proposta = require("../../models/tb_proposta");

const getPropostas = async (req, res) => {
  try {
    const propostas = await Proposta.findAll();
    return res.status(200).json(propostas);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPropostaById = async (req, res) => {
  try {
    const { id_proposta } = req.params;
    const proposta = await Proposta.findByPk(id_proposta);
    if (!proposta) {
      return res.status(404).json({ message: "Proposta não encontrada" });
    }
    return res.status(200).json(proposta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createProposta = async (req, res) => {
  try {
    const { descricao, custosFixos, custosVariaveis, colaboradores } = req.body;

    let codigo_proposta;
    let codigoGerado = false;

    while (!codigoGerado) {
      codigo_proposta = `PROP-${Math.floor(Math.random() * 100000)}`;
      const propostaExistente = await Proposta.findOne({
        where: { codigo_proposta },
      });
      if (!propostaExistente) {
        codigoGerado = true;
      }
    }

    const novaProposta = await Proposta.create({
      descricao,
      custosFixos,
      custosVariaveis,
      colaboradores,
      codigo_proposta,
    });

    novaProposta.calcularTotal();
    await novaProposta.save();

    return res.status(201).json(novaProposta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProposta = async (req, res) => {
  try {
    const { id_proposta } = req.params;
    const { descricao, custosFixos, custosVariaveis, colaboradores } = req.body;

    const propostaExistente = await Proposta.findByPk(id_proposta);
    if (!propostaExistente) {
      return res.status(404).json({ message: "Proposta não encontrada" });
    }

    propostaExistente.descricao = descricao || propostaExistente.descricao;
    propostaExistente.custosFixos =
      custosFixos || propostaExistente.custosFixos;
    propostaExistente.custosVariaveis =
      custosVariaveis || propostaExistente.custosVariaveis;
    propostaExistente.colaboradores =
      colaboradores || propostaExistente.colaboradores;

    propostaExistente.calcularTotal();
    await propostaExistente.save();

    return res.status(200).json(propostaExistente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProposta = async (req, res) => {
  try {
    const { id_proposta } = req.params;
    const proposta = await Proposta.findByPk(id_proposta);
    if (!proposta) {
      return res.status(404).json({ message: "Proposta não encontrada" });
    }

    await proposta.destroy();
    return res.status(200).json({ message: "Proposta excluída com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPropostas,
  getPropostaById,
  createProposta,
  updateProposta,
  deleteProposta,
};
