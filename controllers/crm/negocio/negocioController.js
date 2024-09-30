const Negocio = require("../../../models/crm/tb_negocio");
const TipoNegocio = require("../../../models/crm/tb_tipo_negocio");
const Origem = require("../../../models/crm/tb_origem");
const Vendedor = require("../../../models/crm/tb_vendedor");

const getNegocios = async (req, res) => {
  try {
    const negocios = await Negocio.findAll({
      include: [
        { model: TipoNegocio, as: "tipoNegocio" },
        { model: Origem, as: "origem" },
        { model: Vendedor, as: "vendedor" },
      ],
    });
    return res.status(200).json(negocios);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getNegocioById = async (req, res) => {
  try {
    const { id_negocio } = req.params;
    const negocio = await Negocio.findByPk(id_negocio, {
      include: [
        { model: TipoNegocio, as: "tipoNegocio" },
        { model: Origem, as: "origem" },
        { model: Vendedor, as: "vendedor" },
      ],
    });
    if (!negocio) {
      return res.status(404).json({ message: "Negócio não encontrado" });
    }
    return res.status(200).json(negocio);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createNegocio = async (req, res) => {
  try {
    const {
      titulo_prospeccao,
      nome_prospect,
      id_tipo_negocio,
      id_origem,
      valor_aproximado,
      id_vendedor,
      url_prospeccao,
      detalhe_negocio,
      documento_importado,
      nome_lead,
      email_lead,
      telefone_lead,
      instagram_lead,
      facebook_lead,
      linkedin_lead,
      website_lead,
      endereco_lead,
      cidade_lead,
      estado_lead,
    } = req.body;

    const newNegocio = await Negocio.create({
      titulo_prospeccao,
      nome_prospect,
      id_tipo_negocio,
      id_origem,
      valor_aproximado,
      id_vendedor,
      url_prospeccao,
      detalhe_negocio,
      documento_importado,
      nome_lead,
      email_lead,
      telefone_lead,
      instagram_lead,
      facebook_lead,
      linkedin_lead,
      website_lead,
      endereco_lead,
      cidade_lead,
      estado_lead,
    });

    return res.status(201).json(newNegocio);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateNegocio = async (req, res) => {
  try {
    const { id_negocio } = req.params;
    const {
      titulo_prospeccao,
      nome_prospect,
      id_tipo_negocio,
      id_origem,
      valor_aproximado,
      id_vendedor,
      url_prospeccao,
      detalhe_negocio,
      documento_importado,
      nome_lead,
      email_lead,
      telefone_lead,
      instagram_lead,
      facebook_lead,
      linkedin_lead,
      website_lead,
      endereco_lead,
      cidade_lead,
      estado_lead,
    } = req.body;

    const existingNegocio = await Negocio.findByPk(id_negocio);
    if (!existingNegocio) {
      return res.status(404).json({ message: "Negócio não encontrado" });
    }

    existingNegocio.titulo_prospeccao =
      titulo_prospeccao || existingNegocio.titulo_prospeccao;
    existingNegocio.nome_prospect =
      nome_prospect || existingNegocio.nome_prospect;
    existingNegocio.id_tipo_negocio =
      id_tipo_negocio || existingNegocio.id_tipo_negocio;
    existingNegocio.id_origem = id_origem || existingNegocio.id_origem;
    existingNegocio.valor_aproximado =
      valor_aproximado || existingNegocio.valor_aproximado;
    existingNegocio.id_vendedor = id_vendedor || existingNegocio.id_vendedor;
    existingNegocio.url_prospeccao =
      url_prospeccao || existingNegocio.url_prospeccao;
    existingNegocio.detalhe_negocio =
      detalhe_negocio || existingNegocio.detalhe_negocio;
    existingNegocio.documento_importado =
      documento_importado || existingNegocio.documento_importado;
    existingNegocio.nome_lead = nome_lead || existingNegocio.nome_lead;
    existingNegocio.email_lead = email_lead || existingNegocio.email_lead;
    existingNegocio.telefone_lead =
      telefone_lead || existingNegocio.telefone_lead;
    existingNegocio.instagram_lead =
      instagram_lead || existingNegocio.instagram_lead;
    existingNegocio.facebook_lead =
      facebook_lead || existingNegocio.facebook_lead;
    existingNegocio.linkedin_lead =
      linkedin_lead || existingNegocio.linkedin_lead;
    existingNegocio.website_lead = website_lead || existingNegocio.website_lead;
    existingNegocio.endereco_lead =
      endereco_lead || existingNegocio.endereco_lead;
    existingNegocio.cidade_lead = cidade_lead || existingNegocio.cidade_lead;
    existingNegocio.estado_lead = estado_lead || existingNegocio.estado_lead;

    await existingNegocio.save();
    return res.status(200).json(existingNegocio);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteNegocio = async (req, res) => {
  try {
    const { id_negocio } = req.params;
    const negocio = await Negocio.findByPk(id_negocio);
    if (!negocio) {
      return res.status(404).json({ message: "Negócio não encontrado" });
    }
    await negocio.destroy();
    return res.status(200).json({ message: "Negócio excluído com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getNegocios,
  getNegocioById,
  createNegocio,
  updateNegocio,
  deleteNegocio,
};
