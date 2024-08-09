const Inputs = require('../../models/tb_inputs');

// Criar um novo input
const criarInput = async (req, res, next) => {
  try {
    const { nome_input, type, input, required } = req.body;

    const novoInput = await Inputs.create({
      nome_input,
      type,
      input,
      required,
    });

    return res.status(201).json({ message: 'Input criado com sucesso!', input: novoInput });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obter todos os inputs
const obterInputs = async (req, res, next) => {
  try {
    const inputs = await Inputs.findAll();

    return res.status(200).json(inputs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Obter um input por ID
const obterInputPorId = async (req, res, next) => {
  try {
    const { id_input } = req.params;

    const input = await Inputs.findByPk(id_input);

    if (!input) {
      return res.status(404).json({ message: 'Input não encontrado' });
    }

    return res.status(200).json(input);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Atualizar um input por ID
const atualizarInput = async (req, res, next) => {
  try {
    const { id_input } = req.params;
    const { nome_input, type, input, required } = req.body;

    const inputExistente = await Inputs.findByPk(id_input);

    if (!inputExistente) {
      return res.status(404).json({ message: 'Input não encontrado' });
    }

    inputExistente.nome_input = nome_input;
    inputExistente.type = type;
    inputExistente.input = input;
    inputExistente.required = required;

    await inputExistente.save();

    return res.status(200).json({ message: 'Input atualizado com sucesso!', input: inputExistente });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Deletar um input por ID
const deletarInput = async (req, res, next) => {
  try {
    const { id_input } = req.params;

    const inputExistente = await Inputs.findByPk(id_input);

    if (!inputExistente) {
      return res.status(404).json({ message: 'Input não encontrado' });
    }

    await inputExistente.destroy();

    return res.status(200).json({ message: 'Input deletado com sucesso!' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarInput,
  obterInputs,
  obterInputPorId,
  atualizarInput,
  deletarInput,
};