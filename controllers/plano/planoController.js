const Plano = require("../../models/tb_plano");

const criarPlano = async (req, res) => {
  try {
    const { nome_plano, descricao, valor_plano, tag, itens_do_plano } = req.body;
    const plano = await Plano.create({ nome_plano, descricao, valor_plano, tag, itens_do_plano });

    res.status(201).send(plano);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const buscarTodosPlanos = async (req, res) => {
  try {
    const planos = await Plano.findAll();
    res.send(planos);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const buscarPlanoPorId = async (req, res) => {
  try {
    const id_plano = req.params.id_plano;
    const plano = await Plano.findByPk(id_plano);
    if (!plano) {
      return res.status(404).send({ mensagem: "Plano não encontrado." });
    }
    res.send(plano);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const atualizarPlano = async (req, res) => {
  try {
    const id_plano = req.params.id_plano;
    const { nome_plano, descricao, valor_plano, tag, itens_do_plano } = req.body;

    const plano = await Plano.findByPk(id_plano);
    if (!plano) {
      return res.status(404).send({ mensagem: "Plano não encontrado." });
    }

    plano.nome_plano = nome_plano;
    plano.descricao = descricao;
    plano.valor_plano = valor_plano;
    plano.tag = tag;
    plano.itens_do_plano = itens_do_plano;

    await plano.save();

    res.send({ mensagem: "Plano atualizado com sucesso!", plano });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deletarPlano = async (req, res) => {
  try {
    const id_plano = req.params.id_plano;

    const plano = await Plano.findByPk(id_plano);
    if (!plano) {
      return res.status(404).send({ mensagem: "Plano não encontrado." });
    }

    await plano.destroy();
    res.send({ mensagem: "Plano deletado com sucesso!" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  criarPlano,
  buscarTodosPlanos,
  buscarPlanoPorId,
  atualizarPlano,
  deletarPlano,
};
