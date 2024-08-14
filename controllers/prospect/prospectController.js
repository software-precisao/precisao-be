const Prospect = require("../../models/tb_prospect");

const getProspects = async (req, res) => {
  try {
    const prospects = await Prospect.findAll();
    return res.status(200).json(prospects);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getProspectById = async (req, res) => {
  try {
    const { id_prospect } = req.params;
    const prospect = await Prospect.findByPk(id_prospect);
    if (!prospect) {
      return res.status(404).json({ message: "Prospect não encontrado" });
    }
    return res.status(200).json(prospect);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createProspect = async (req, res) => {
  try {
    const {
      nome_lead,
      id_responsavel,
      id_fase,
      origem,
      valor_projeto,
      doc,
      cnpj,
      telefone1,
      telefone2,
      email,
      website,
      observacao,
    } = req.body;

    const newProspect = await Prospect.create({
      nome_lead,
      id_responsavel,
      id_fase,
      origem,
      valor_projeto,
      doc,
      cnpj,
      telefone1,
      telefone2,
      email,
      website,
      observacao,
    });

    return res.status(201).json(newProspect);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProspect = async (req, res) => {
  try {
    const { id_prospect } = req.params;
    const {
      nome_lead,
      id_responsavel,
      id_fase,
      origem,
      valor_projeto,
      doc,
      cnpj,
      telefone1,
      telefone2,
      email,
      website,
      observacao,
    } = req.body;

    const existingProspect = await Prospect.findByPk(id_prospect);
    if (!existingProspect) {
      return res.status(404).json({ message: "Prospect não encontrado" });
    }

    existingProspect.nome_lead = nome_lead || existingProspect.nome_lead;
    existingProspect.id_responsavel = id_responsavel || existingProspect.id_responsavel;
    existingProspect.id_fase = id_fase || existingProspect.id_fase;
    existingProspect.origem = origem || existingProspect.origem;
    existingProspect.valor_projeto = valor_projeto || existingProspect.valor_projeto;
    existingProspect.doc = doc || existingProspect.doc;
    existingProspect.cnpj = cnpj || existingProspect.cnpj;
    existingProspect.telefone1 = telefone1 || existingProspect.telefone1;
    existingProspect.telefone2 = telefone2 || existingProspect.telefone2;
    existingProspect.email = email || existingProspect.email;
    existingProspect.website = website || existingProspect.website;
    existingProspect.observacao = observacao || existingProspect.observacao;

    await existingProspect.save();
    return res.status(200).json(existingProspect);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProspect = async (req, res) => {
  try {
    const { id_prospect } = req.params;
    const prospect = await Prospect.findByPk(id_prospect);
    if (!prospect) {
      return res.status(404).json({ message: "Prospect não encontrado" });
    }

    await prospect.destroy();
    return res.status(200).json({ message: "Prospect excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProspects,
  getProspectById,
  createProspect,
  updateProspect,
  deleteProspect,
};
