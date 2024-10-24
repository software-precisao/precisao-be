const Cliente = require("../../models/tb_cliente");
const Projeto = require("../../models/tb_projetos");
const TipoCliente = require("../../models/tb_tipo");

const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: [{ model: TipoCliente, as: 'tipo' }],
    });
    return res.status(200).json(clientes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getClienteById = async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const cliente = await Cliente.findByPk(id_cliente, {
      include: [{ model: TipoCliente, as: 'tipo' }],
    });
    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    return res.status(200).json(cliente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createCliente = async (req, res) => {
  try {
    const {
      nome_cliente,
      razao_social,
      cnpj,
      id_tipo_cliente,
      telefone1,
      telefone2,
      email,
      observacao,
      endereco,
    } = req.body;

    const existingCliente = await Cliente.findOne({ where: { email } });
    if (existingCliente) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    const newCliente = await Cliente.create({
      nome_cliente,
      razao_social,
      cnpj,
      id_tipo_cliente,
      telefone1,
      telefone2,
      email,
      observacao,
      endereco,
    });
    return res.status(201).json(newCliente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCliente = async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const {
      nome_cliente,
      razao_social,
      cnpj,
      telefone1,
      telefone2,
      email,
      id_tipo_cliente,
      observacao,
      endereco,
    } = req.body;

    const existingCliente = await Cliente.findByPk(id_cliente);
    if (!existingCliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    existingCliente.nome_cliente = nome_cliente || existingCliente.nome_cliente;
    existingCliente.razao_social = razao_social || existingCliente.razao_social;
    existingCliente.cnpj = cnpj || existingCliente.cnpj;
    existingCliente.id_tipo_cliente = id_tipo_cliente || existingCliente.id_tipo_cliente;
    existingCliente.telefone1 = telefone1 || existingCliente.telefone1;
    existingCliente.telefone2 = telefone2 || existingCliente.telefone2;
    existingCliente.email = email || existingCliente.email;
    existingCliente.observacao = observacao || existingCliente.observacao;
    existingCliente.endereco = endereco || existingCliente.endereco;

    await existingCliente.save();
    return res.status(200).json(existingCliente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const { id_cliente } = req.params;
    const cliente = await Cliente.findByPk(id_cliente);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    await Projeto.destroy({ where: { id_cliente: cliente.id_cliente } });
    await cliente.destroy();
    return res.status(200).json({ message: "Cliente excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};
