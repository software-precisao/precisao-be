const bcrypt = require("bcrypt");
const { format } = require("date-fns");
const path = require("path");
const fs = require("fs").promises;

require("dotenv").config();

const transporter = require("../../helpers/transporter");
const Code = require("../../models/tb_code");
const Auth = require("../../models/tb_auth");
const Usuario = require("../../models/tb_usuario");
const PerfilChurch = require("../../models/tb_perfil_igreja");
const PerfilUser = require("../../models/tb_perfil_user");
const Trial = require("../../models/tb_trial");
const Intro = require("../../models/tb_intro");
const Avatar = require("../../models/tb_avatar");
const Logo = require("../../models/tb_logo");
const Preferences = require("../../models/tb_preference");
const Status = require("../../models/tb_status");
const Nivel = require("../../models/tb_nivel");
const Plano = require("../../models/tb_plano");
const Preference = require("../../models/tb_preference");

const createUsuario = async (req, res, next) => {
  try {
    const emailExistente = await Auth.findOne({
      where: { email: req.body.email },
    });
    if (emailExistente) {
      return res.status(409).send({
        mensagem: "Email já cadastrado, por favor insira um email diferente!",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    const fileAvatar = req.file ? req.file.filename : "default-avatar.png";
    const fileLogo = req.file ? req.file.filename : "default-logo.png";

    const novoUsuarioAuth = await Auth.create({
      email: req.body.email,
      senha: hashedPassword,
    });

    const novoPerfilUsuario = await PerfilUser.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data_nascimento,
      genero: req.body.genero,
      telefone1: req.body.telefone1,
      telefone2: req.body.telefone2,
    });

    const novoPerfilIgreja = await PerfilChurch.create({
      nome_igreja: req.body.nome_igreja,
    });

    const novoPreferencesIgreja = await Preferences.create({
      toda_igreja: req.body.toda_igreja,
      gestao_kids: req.body.gestao_kids,
      secretaria: req.body.secretaria,
      tesouraria: req.body.tesouraria,
      midia: req.body.midia,
      id_perfil_igreja: novoPerfilIgreja.id_perfil_igreja,
    });

    const novaLogoIgreja = await Logo.create({
      logo: `/logo/${fileLogo}`,
      id_perfil_igreja: novoPerfilIgreja.id_perfil_igreja,
    });

    const novoDadoUsuario = await Usuario.create({
      id_auth: novoUsuarioAuth.id_auth,
      id_status: 1,
      id_preference: novoPreferencesIgreja.id_preference,
      id_status_pagamento: 0,
      id_nivel: req.body.id_nivel,
      id_plano: req.body.id_plano,
      id_perfil_user: novoPerfilUsuario.id_perfil_user,
      id_perfil_igreja: novoPerfilIgreja.id_perfil_igreja,
    });

    const novoAvatarUsuario = await Avatar.create({
      avatar: `/avatar/${fileAvatar}`,
      id_user: novoDadoUsuario.id_user,
    });

    const codigoAleatorio = Math.floor(1000 + Math.random() * 9000).toString();

    const code = await Code.create({
      type_code: 1,
      code: codigoAleatorio,
    });

    const novoTrial = await Trial.create({
      data_inicio: format(new Date(), "yyyy-MM-dd"),
      status: 2,
      id_perfil_igreja: novoPerfilIgreja.id_perfil_igreja,
    });

    const novoStart = await Intro.create({
      status: 2,
      id_perfil_igreja: novoPerfilIgreja.id_perfil_igreja,
    });

    const htmlFilePath = path.join(
      __dirname,
      "../../template/usuario/novo.html"
    );
    let htmlContent = await fs.readFile(htmlFilePath, "utf8");

    htmlContent = htmlContent
      .replace("{{nome}}", novoPerfilUsuario.nome)
      .replace("{{email}}", novoUsuarioAuth.email);

    let email = novoUsuarioAuth.email;

    let mailOptions = {
      from: `"Atendimento Software Precisão" ${process.env.EMAIL_FROM}`,
      to: email,
      subject: "✅ Conta criada com sucesso!",
      html: htmlContent,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Mensagem enviada: %s", info.messageId);

    const response = {
      mensagem: "Usuário cadastrado com sucesso",
      usuarioCriado: {
        id_user: novoDadoUsuario.id_user,
        nome: novoPerfilUsuario.nome,
        email: novoUsuarioAuth.email,
        nivel: novoDadoUsuario.id_nivel,
        avatar: novaLogoIgreja.logo,
        preference: novoPreferencesIgreja.id_preference,
        logo: novoAvatarUsuario.avatar,
        id_perfil_user: novoPerfilUsuario.id_perfil_user,
        id_perfil_igreja: novoPerfilIgreja.id_perfil_igreja,
        trial: novoTrial.id_trial,
        start: novoStart.id_intro,
        code: code.code,
      },
    };

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

const createUsuarioAdmin = async (req, res, next) => {
  try {
    const emailExistente = await Auth.findOne({
      where: { email: req.body.email },
    });
    if (emailExistente) {
      return res.status(409).send({
        mensagem: "Email já cadastrado, por favor insira um email diferente!",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    const fileAvatar = req.file ? req.file.filename : "default-avatar.png";

    const novoUsuarioAuth = await Auth.create({
      email: req.body.email,
      senha: hashedPassword,
    });

    const novoPerfilUsuario = await PerfilUser.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data_nascimento,
      genero: req.body.genero,
      telefone1: req.body.telefone1,
      telefone2: req.body.telefone2,
    });

    const novoDadoUsuario = await Usuario.create({
      id_auth: novoUsuarioAuth.id_auth,
      id_status: 1,
      id_nivel: 1,
      id_perfil_user: novoPerfilUsuario.id_perfil_user,
    });

    const novoAvatarUsuario = await Avatar.create({
      avatar: `/avatar/${fileAvatar}`,
      id_user: novoDadoUsuario.id_user,
    });

    const codigoAleatorio = Math.floor(1000 + Math.random() * 9000).toString();

    const code = await Code.create({
      type_code: 1,
      code: codigoAleatorio,
    });

    const response = {
      mensagem: "Usuário cadastrado com sucesso",
      usuarioCriado: {
        id_user: novoDadoUsuario.id_user,
        nome: novoPerfilUsuario.nome,
        email: novoUsuarioAuth.email,
        nivel: novoDadoUsuario.id_nivel,
        avatar: novoAvatarUsuario.avatar,
        id_perfil_user: novoPerfilUsuario.id_perfil_user,
        code: code.code,
      },
    };

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

const createMeuUsuario = async (req, res, next) => {
  try {
    const emailExistente = await Auth.findOne({
      where: { email: req.body.email },
    });
    if (emailExistente) {
      return res.status(409).send({
        mensagem: "Email já cadastrado, por favor insira um email diferente!",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    const fileAvatar = req.file ? req.file.filename : "default-avatar.png";

    const novoUsuarioAuth = await Auth.create({
      email: req.body.email,
      senha: hashedPassword,
    });

    const novoPerfilUsuario = await PerfilUser.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data_nascimento,
      genero: req.body.genero,
      telefone1: req.body.telefone1,
      telefone2: req.body.telefone2,
    });

    const novoDadoUsuario = await Usuario.create({
      id_auth: novoUsuarioAuth.id_auth,
      id_status: 1,
      id_nivel: req.body.id_nivel,
      id_plano: req.body.id_plano,
      id_perfil_user: novoPerfilUsuario.id_perfil_user,
      id_perfil_igreja: req.body.id_perfil_igreja,
    });

    const novoAvatarUsuario = await Avatar.create({
      avatar: `/avatar/${fileAvatar}`,
      id_user: novoDadoUsuario.id_user,
    });

    const codigoAleatorio = Math.floor(1000 + Math.random() * 9000).toString();

    const code = await Code.create({
      type_code: 1,
      code: codigoAleatorio,
    });

    const htmlFilePath = path.join(
      __dirname,
      "../template/usuario/convite.html"
    );
    let htmlContent = await fs.readFile(htmlFilePath, "utf8");

    htmlContent = htmlContent
      .replace("{{nome}}", novoPerfilUsuario.nome)
      .replace("{{email}}", novoUsuarioAuth.email);

    let email = novoUsuarioAuth.email;

    let mailOptions = {
      from: `"Atendimento Software Precisão" ${process.env.EMAIL_FROM}`,
      to: email,
      subject: "🎉 Convite pra você!",
      html: htmlContent,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Mensagem enviada: %s", info.messageId);

    const response = {
      mensagem: "Usuário cadastrado com sucesso",
      usuarioCriado: {
        id_user: novoDadoUsuario.id_user,
        nome: novoPerfilUsuario.nome,
        email: novoUsuarioAuth.email,
        nivel: novoDadoUsuario.id_nivel,
        avatar: novoAvatarUsuario.avatar,
        id_perfil_user: novoDadoUsuario.id_perfil_user,
        id_perfil_igreja: novoDadoUsuario.id_perfil_igreja,
        code: code.code,
      },
    };

    return res.status(202).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

const updatePerfilUser = async (req, res, next) => {
  const { id_user } = req.params;
  const { nome, sobrenome, data_nascimento, genero, telefone1, telefone2 } =
    req.body;

  try {
    // Verifica se o usuário existe
    const usuario = await Usuario.findByPk(id_user);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Cria um objeto com os campos a serem atualizados
    const updatedFields = {};
    if (nome !== undefined) updatedFields.nome = nome;
    if (sobrenome !== undefined) updatedFields.sobrenome = sobrenome;
    if (data_nascimento !== undefined)
      updatedFields.data_nascimento = data_nascimento;
    if (genero !== undefined) updatedFields.genero = genero;
    if (telefone1 !== undefined) updatedFields.telefone1 = telefone1;
    if (telefone2 !== undefined) updatedFields.telefone2 = telefone2;

    // Atualiza o perfil do usuário
    const [updated] = await PerfilUser.update(updatedFields, {
      where: { id_user },
    });

    if (updated) {
      const updatedPerfilUser = await PerfilUser.findOne({
        where: { id_user },
      });
      return res.status(200).json(updatedPerfilUser);
    }

    throw new Error("Perfil não encontrado");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateAvatar = async (req, res, next) => {
  const { id_user } = req.params;
  const fileAvatar = req.file ? `/avatar/${req.file.filename}` : undefined;

  try {
    // Verifica se o usuário existe
    const usuario = await Usuario.findByPk(id_user);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Cria um objeto com os campos a serem atualizados
    const updatedFields = {};
    if (fileAvatar !== undefined) updatedFields.avatar = fileAvatar;

    // Atualiza o avatar do usuário
    const [updated] = await Avatar.update(updatedFields, {
      where: { id_user },
    });

    if (updated) {
      const updatedAvatar = await Avatar.findOne({ where: { id_user } });
      return res.status(200).json(updatedAvatar);
    }

    throw new Error("Avatar não encontrado");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// const getUsuarioDetalhado = async (req, res, next) => {
//   const { id_user } = req.params;

//   try {
//     const usuarioDetalhado = await Usuario.findOne({
//       where: { id_user },
//       include: [
//         { model: Auth, as: "auth", attributes: ["email"] },
//         { model: PerfilUser, as: "perfilUser" },
//         { model: PerfilChurch, as: "perfilIgreja" },
//         { model: Trial, as: "trial" },
//         { model: Intro, as: "intro" },
//         { model: Avatar, as: "avatar" },
//         { model: Code, as: "code" },
//       ],
//     });

//     if (!usuarioDetalhado) {
//       return res.status(404).json({ error: "Usuário não encontrado" });
//     }

//     return res.status(200).json(usuarioDetalhado);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: error.message });
//   }
// };

const getUserById =  async (req, res) => {
  const { id_user } = req.params;

  try {
    const usuario = await Usuario.findOne({
      where: { id_user },
      include: [
        { model: Auth, as: 'auth' },
        { model: Status, as: 'status' },
        { model: Nivel, as: 'nivel' },
        { model: Plano, as: 'plano' },
        { model: Preference, as: 'preference' },
        { model: PerfilUser, as: 'perfilUser' },
        { model: PerfilChurch, as: 'perfilIgreja' }
      ]
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    res.json(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ message: "Erro ao buscar usuário." });
  }
}


const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [
        { model: Auth, as: 'auth' },
        { model: Status, as: 'status' },
        { model: Nivel, as: 'nivel' },
        { model: Plano, as: 'plano' },
        { model: Preference, as: 'preference' },
        { model: PerfilUser, as: 'perfilUser' },
        { model: PerfilChurch, as: 'perfilIgreja' }
      ]
    });
    console.log("pegando usuarios")
    
    res.json(usuarios);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    
    res.status(500).json({ message: "Erro ao buscar usuários." });
  }
}

const deleteUsuarioMaster = async (req, res, next) => {
  const { id_user } = req.params;

  try {
    // Encontra o usuário e todas as associações
    const usuario = await Usuario.findByPk(id_user, {
      include: [
        { model: PerfilUser, as: "perfilUser" },
        { model: PerfilChurch, as: "perfilIgreja" },
        { model: Trial, as: "trial" },
        { model: Intro, as: "intro" },
        { model: Avatar, as: "avatar" },
        { model: Code, as: "code" },
        { model: Auth, as: "auth" },
      ],
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (usuario.perfilUser) await usuario.perfilUser.destroy();
    if (usuario.perfilIgreja) await usuario.perfilIgreja.destroy();
    if (usuario.trial) await usuario.trial.destroy();
    if (usuario.intro) await usuario.intro.destroy();
    if (usuario.avatar) await usuario.avatar.destroy();
    if (usuario.code) await usuario.code.destroy();
    if (usuario.auth) await usuario.auth.destroy();

    // Deleta o usuário
    await usuario.destroy();

    return res.status(200).json({
      mensagem: "Usuário e todas as associações deletadas com sucesso",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteUsuarioSimples = async (req, res, next) => {
  const { id_user } = req.params;

  try {
    // Encontra o usuário e todas as associações
    const usuario = await Usuario.findByPk(id_user, {
      include: [
        { model: PerfilUser, as: "perfilUser" },
        { model: Avatar, as: "avatar" },
        { model: Code, as: "code" },
        { model: Auth, as: "auth" },
      ],
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (usuario.perfilUser) await usuario.perfilUser.destroy();
    if (usuario.avatar) await usuario.avatar.destroy();
    if (usuario.code) await usuario.code.destroy();
    if (usuario.auth) await usuario.auth.destroy();

    // Deleta o usuário
    await usuario.destroy();

    return res.status(200).json({
      mensagem: "Usuário e todas as associações deletadas com sucesso",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUsuario,
  createMeuUsuario,
  updatePerfilUser,
  updateAvatar,
  // getUsuarioDetalhado,
  deleteUsuarioMaster,
  deleteUsuarioSimples,
  createUsuarioAdmin,
  getAllUsers,
  getUserById
};
