const ControlePatrimonio = require("../../models/tb_controle_patrimonio");

const criarPatrimonio = async (req, res) => {
  try {
    const patrimonio = await ControlePatrimonio.create(req.body);
    return res.status(201).send({ message: "Patrimônio criado com sucesso", patrimonio });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterTodosPatrimonios = async (req, res) => {
  try {
    const patrimônios = await ControlePatrimonio.findAll();
    return res.status(200).send(patrimônios);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterPatrimonioPorId = async (req, res) => {
  try {
    const { id_patrimonio } = req.params;
    const patrimonio = await ControlePatrimonio.findByPk(id_patrimonio);
    if (!patrimonio) {
      return res.status(404).send({ message: "Patrimônio não encontrado" });
    }
    return res.status(200).send(patrimonio);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarPatrimonio = async (req, res) => {
  try {
    const { id_patrimonio } = req.params;
    const patrimonio = await ControlePatrimonio.findByPk(id_patrimonio);
    if (!patrimonio) {
      return res.status(404).send({ message: "Patrimônio não encontrado" });
    }

    await patrimonio.update(req.body);
    return res.status(200).send({ message: "Patrimônio atualizado com sucesso", patrimonio });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarPatrimonio = async (req, res) => {
  try {
    const { id_patrimonio } = req.params;
    const patrimonio = await ControlePatrimonio.findByPk(id_patrimonio);
    if (!patrimonio) {
      return res.status(404).send({ message: "Patrimônio não encontrado" });
    }

    await patrimonio.destroy();
    return res.status(200).send({ message: "Patrimônio deletado com sucesso" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  criarPatrimonio,
  obterTodosPatrimonios,
  obterPatrimonioPorId,
  atualizarPatrimonio,
  deletarPatrimonio,
};
