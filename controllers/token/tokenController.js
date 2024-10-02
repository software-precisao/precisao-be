const Token = require("../../models/tb_tokens");

const criarToken = async (req, res) => {
  try {
    const { token, url_token, url_documentacao } = req.body;

    if (!token || !url_token || !url_documentacao) {
      return res.status(400).json({
        error:
          "Os campos token, url_token e url_documentacao são obrigatórios.",
      });
    }

    const fileLogoParceiro =
      req.files && req.files.logo_parceiro
        ? req.files.logo_parceiro[0].filename
        : "default-logo.png";

    const novoToken = await Token.create({
      token,
      url_token,
      url_documentacao,
      logo_parceiro: `/logo/${fileLogoParceiro}`,
    });

    return res
      .status(201)
      .json({ message: "Token criado com sucesso!", token: novoToken });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterTokens = async (req, res) => {
  try {
    const tokens = await Token.findAll();
    return res.status(200).json(tokens);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const obterTokenPorId = async (req, res) => {
  try {
    const { id_token } = req.params;
    const token = await Token.findByPk(id_token);

    if (!token) {
      return res.status(404).json({ message: "Token não encontrado" });
    }

    return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const atualizarToken = async (req, res) => {
  try {
    const { id_token } = req.params;
    const { token, url_token, url_documentacao, logo_parceiro } = req.body;

    const tokenExistente = await Token.findByPk(id_token);
    if (!tokenExistente) {
      return res.status(404).json({ message: "Token não encontrado" });
    }

    tokenExistente.token = token || tokenExistente.token;
    tokenExistente.url_token = url_token || tokenExistente.url_token;
    tokenExistente.url_documentacao =
      url_documentacao || tokenExistente.url_documentacao;
    tokenExistente.logo_parceiro =
      logo_parceiro || tokenExistente.logo_parceiro;

    await tokenExistente.save();

    return res.status(200).json(tokenExistente);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletarToken = async (req, res) => {
  try {
    const { id_token } = req.params;
    const token = await Token.findByPk(id_token);
    if (!token) {
      return res.status(404).json({ message: "Token não encontrado" });
    }

    await token.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarToken,
  obterTokens,
  obterTokenPorId,
  atualizarToken,
  deletarToken,
};
