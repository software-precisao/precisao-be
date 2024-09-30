const Linguagem = require("../../models/tb_linguagem");

const criarLinguagem = async (req, res) => {
  try {
    const { linguagem } = req.body;

    if (!linguagem) {
      return res.status(400).json({ error: "O campo 'linguagem' é obrigatório." });
    }

    const novaLinguagem = await Linguagem.create({ linguagem });
    return res.status(201).json({ message: "Linguagem criada com sucesso!", linguagem: novaLinguagem });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterLinguagens = async (req, res) => {
  try {
    const linguagens = await Linguagem.findAll();
    return res.status(200).json(linguagens);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterLinguagemPorId = async (req, res) => {
  try {
    const { id_linguagem } = req.params;

    const linguagem = await Linguagem.findByPk(id_linguagem);
    if (!linguagem) {
      return res.status(404).json({ message: "Linguagem não encontrada." });
    }

    return res.status(200).json(linguagem);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const atualizarLinguagem = async (req, res) => {
  try {
    const { id_linguagem } = req.params;
    const { linguagem } = req.body;

    const linguagemExistente = await Linguagem.findByPk(id_linguagem);
    if (!linguagemExistente) {
      return res.status(404).json({ message: "Linguagem não encontrada." });
    }

    linguagemExistente.linguagem = linguagem || linguagemExistente.linguagem;

    await linguagemExistente.save();

    return res.status(200).json({ message: "Linguagem atualizada com sucesso!", linguagem: linguagemExistente });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletarLinguagem = async (req, res) => {
  try {
    const { id_linguagem } = req.params;

    const linguagemExistente = await Linguagem.findByPk(id_linguagem);
    if (!linguagemExistente) {
      return res.status(404).json({ message: "Linguagem não encontrada." });
    }

    await linguagemExistente.destroy();

    return res.status(200).json({ message: "Linguagem deletada com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarLinguagem,
  obterLinguagens,
  obterLinguagemPorId,
  atualizarLinguagem,
  deletarLinguagem,
};
