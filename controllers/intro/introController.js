const Intro = require("../../models/tb_intro");
const Perfil = require("../../models/tb_perfil_igreja");

const criarIntro = async (req, res, next) => {
  try {
    const { status, id_perfil_igreja } = req.body;

    const novoIntro = await Intro.create({
      status,
      id_perfil_igreja,
    });

    return res
      .status(201)
      .json({ message: "Intro criado com sucesso!", intro: novoIntro });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterIntros = async (req, res, next) => {
  try {
    const intros = await Intro.findAll({
      include: [{ model: Perfil, as: "Perfil" }],
    });

    return res.status(200).json(intros);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterIntroPorId = async (req, res, next) => {
  try {
    const { id_intro } = req.params;

    const intro = await Intro.findByPk(id_intro, {
      include: [{ model: Perfil, as: "Perfil" }],
    });

    if (!intro) {
      return res.status(404).json({ message: "Intro não encontrado" });
    }

    return res.status(200).json(intro);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const atualizarIntro = async (req, res, next) => {
  try {
    const { id_intro } = req.params;
    const { status, id_perfil_igreja } = req.body;

    const introExistente = await Intro.findByPk(id_intro);

    if (!introExistente) {
      return res.status(404).json({ message: "Intro não encontrado" });
    }

    introExistente.status = status;
    introExistente.id_perfil_igreja = id_perfil_igreja;

    await introExistente.save();

    return res
      .status(200)
      .json({
        message: "Intro atualizado com sucesso!",
        intro: introExistente,
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletarIntro = async (req, res, next) => {
  try {
    const { id_intro } = req.params;

    const introExistente = await Intro.findByPk(id_intro);

    if (!introExistente) {
      return res.status(404).json({ message: "Intro não encontrado" });
    }

    await introExistente.destroy();

    return res.status(200).json({ message: "Intro deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarIntro,
  obterIntros,
  obterIntroPorId,
  atualizarIntro,
  deletarIntro,
};
