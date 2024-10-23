const Funcao = require("../../models/tb_funcao");

const getFuncoes = async (req, res) => {
  try {
    const funcoes = await Funcao.findAll();
    return res.status(200).json(funcoes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getFuncaoById = async (req, res) => {
  try {
    const { id_funcao } = req.params;
    const funcao = await Funcao.findByPk(id_funcao);
    if (!funcao) {
      return res.status(404).json({ message: "Função não encontrada" });
    }
    return res.status(200).json(funcao);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createFuncao = async (req, res) => {
  try {
    const { funcao, observacoes } = req.body;
    const novaFuncao = await Funcao.create({
      funcao,
      observacoes
    });
    return res.status(201).json(novaFuncao);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateFuncao = async (req, res) => {
  try {
    const { id_funcao } = req.params;
    const { funcao, observacoes } = req.body;

    const funcaoExistente = await Funcao.findByPk(id_funcao);
    if (!funcaoExistente) {
      return res.status(404).json({ message: "Função não encontrada" });
    }

    funcaoExistente.funcao = funcao || funcaoExistente.funcao;
    funcaoExistente.observacoes = observacoes || funcaoExistente.observacoes;

    await funcaoExistente.save();
    return res.status(200).json(funcaoExistente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteFuncao = async (req, res) => {
  try {
    const { id_funcao } = req.params;
    const funcao = await Funcao.findByPk(id_funcao);
    if (!funcao) {
      return res.status(404).json({ message: "Função não encontrada" });
    }

    await funcao.destroy();
    return res.status(200).json({ message: "Função excluída com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getFuncoes,
  getFuncaoById,
  createFuncao,
  updateFuncao,
  deleteFuncao,
};
