const bcrypt = require("bcrypt");
const User = require("../../models/tb_auth");
const Code = require("../../models/tb_code");
require("dotenv").config();

const transporter = require("../../helpers/transporter");

const obterUsuarioPorEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const usuario = await User.findOne({ where: { email: email } });
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    const codigoAleatorio = Math.floor(1000 + Math.random() * 9000).toString();

    const code = await Code.create({
      type_code: 2,
      code: codigoAleatorio,
      id_user: usuario.id_user,
    });

    const htmlFilePath = path.join(__dirname, "../template/auth/code.html");
    let htmlContent = await fs.readFile(htmlFilePath, "utf8");

    htmlContent = htmlContent
      .replace("{{email}}", usuario.email)
      .replace("{{code}}", code.code);

    let mailOptions = {
      from: `"Equipe Software Precisão" ${process.env.EMAIL_FROM}`,
      to: email,
      subject: "🔒 Código de confirmação",
      html: htmlContent,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Mensagem enviada: %s", info.messageId);

    return res.status(200).send({ response: { id_user: usuario.id_user } });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const validaCode = async (req, res, next) => {
  try {
    const { code } = req.body;

    // Verifica se o código foi fornecido
    if (!code) {
      return res.status(400).send({ message: "Código não fornecido" });
    }

    // Busca o código na tabela
    const codes = await Code.findOne({ where: { code: code } });

    // Verifica se o código foi encontrado
    if (!codes) {
      return res.status(404).send({ message: "Código não encontrado" });
    }

    // Retorna o ID do usuário associado ao código
    return res.status(200).send({ response: { id_user: codes.id_user } });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const alterarSenha = async (req, res) => {
  try {
    const usuario = await User.findByPk(req.body.id_auth);
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    const hashedPassword = await bcrypt.hash(req.body.senha, 10);

    usuario.senha = hashedPassword;

    await usuario.save();
    return res
      .status(201)
      .send({ mensagem: "Dados de usuário alterados com sucesso!" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterUsuarioPorEmail,
  alterarSenha,
  validaCode,
};
