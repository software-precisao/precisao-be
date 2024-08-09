require("dotenv").config();

const PerfilIgreja = require('../../models/tb_perfil_igreja');
const LogoIgreja = require('../../models/tb_logo');

const updatePerfilIgreja = async (req, res, next) => {
  const { id_perfil_igreja } = req.params;
  const {
    nome_igreja,
    qtd_membros,
    cnpj,
    nif,
    telefone,
    email_igreja,
    website,
    instagram,
    facebook
  } = req.body;

  try {
    // Verifica se o perfil da igreja existe
    const perfilIgreja = await PerfilIgreja.findByPk(id_perfil_igreja);
    if (!perfilIgreja) {
      return res.status(404).json({ error: 'Perfil da igreja não encontrado' });
    }

    // Cria um objeto com os campos a serem atualizados
    const updatedFields = {};
    if (nome_igreja !== undefined) updatedFields.nome_igreja = nome_igreja;
    if (qtd_membros !== undefined) updatedFields.qtd_membros = qtd_membros;
    if (cnpj !== undefined) updatedFields.cnpj = cnpj;
    if (nif !== undefined) updatedFields.nif = nif;
    if (telefone !== undefined) updatedFields.telefone = telefone;
    if (email_igreja !== undefined) updatedFields.email_igreja = email_igreja;
    if (website !== undefined) updatedFields.website = website;
    if (instagram !== undefined) updatedFields.instagram = instagram;
    if (facebook !== undefined) updatedFields.facebook = facebook;

    // Atualiza o perfil da igreja
    const [updated] = await PerfilIgreja.update(updatedFields, {
      where: { id_perfil_igreja }
    });

    if (updated) {
      const updatedPerfilIgreja = await PerfilIgreja.findOne({ where: { id_perfil_igreja } });
      return res.status(200).json(updatedPerfilIgreja);
    }

    throw new Error('Erro ao atualizar o perfil da igreja');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateLogo = async (req, res, next) => {
    const { id_perfil_igreja } = req.params;
    const fileLogo = req.file ? `/logo/${req.file.filename}` : undefined;
  
    try {
      // Verifica se o perfil existe
      const perfil = await LogoIgreja.findByPk(id_perfil_igreja);
      if (!perfil) {
        return res.status(404).json({ error: "Perfil não encontrado" });
      }
  
      // Cria um objeto com os campos a serem atualizados
      const updatedFields = {};
      if (fileLogo !== undefined) updatedFields.logo = fileLogo;
  
      // Atualiza o avatar do usuário
      const [updated] = await LogoIgreja.update(updatedFields, {
        where: { id_perfil_igreja },
      });
  
      if (updated) {
        const updatedLogo = await LogoIgreja.findOne({ where: { id_perfil_igreja } });
        return res.status(200).json(updatedLogo);
      }
  
      throw new Error("Logo não encontrado");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  updatePerfilIgreja,
  updateLogo
};