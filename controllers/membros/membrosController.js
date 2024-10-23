const Membro = require("../../models/tb_membros");
const Cargo = require("../../models/tb_cargo"); // Model de Cargo
const Funcao = require("../../models/tb_funcao"); // Model de Funcao

const verificarIdExistente = async (id, modelo) => {
  const existe = await modelo.findByPk(id);
  return existe !== null;
};

const criarMembro = async (req, res) => {
  try {
    const { id_cargo, id_funcao } = req.body;

    const cargoExistente = await verificarIdExistente(id_cargo, Cargo);
    const funcaoExistente = await verificarIdExistente(id_funcao, Funcao);

    if (!cargoExistente) {
      return res.status(400).send({ message: "ID de cargo não existe" });
    }

    if (!funcaoExistente) {
      return res.status(400).send({ message: "ID de função não existe" });
    }

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

    const { id_cargo, id_funcao } = req.body;

    if (id_cargo && !(await verificarIdExistente(id_cargo, Cargo))) {
      return res.status(400).send({ message: "ID de cargo não existe" });
    }

    if (id_funcao && !(await verificarIdExistente(id_funcao, Funcao))) {
      return res.status(400).send({ message: "ID de função não existe" });
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
