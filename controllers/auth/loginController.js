const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Auth = require("../../models/tb_auth");
const Usuario = require("../../models/tb_usuario");
const PerfilChurch = require("../../models/tb_perfil_igreja");
const PerfilUser = require("../../models/tb_perfil_user");
const Trial = require("../../models/tb_trial");
const Intro = require("../../models/tb_intro");
const Avatar = require("../../models/tb_avatar");

const autenticarUsuario = async (req, res, next) => {
  try {
    const { email, senha } = req.body;

    const auth = await Auth.findOne({ where: { email: email } });

    if (!auth) {
      return res.status(401).send({
        mensagem: "Falha na autenticação.",
      });
    }

    const isPasswordValid = await bcrypt.compare(senha, auth.senha);

    if (isPasswordValid) {
      const perfilChurch = await PerfilChurch.findOne({
        where: { id_perfil_igreja: usuario.id_perfil_igreja },
      });
      const perfilUser = await PerfilUser.findOne({
        where: { id_perfil_user: usuario.id_perfil_user },
      });
      const usuario = await Usuario.findOne({
        where: { id_auth: auth.id_auth },
      });
      const avatar = await Avatar.findOne({
        where: { id_user: usuario.id_user },
      });
      const periodoTeste = await Trial.findOne({
        where: { id_perfil_igreja: perfilChurch.id_perfil_igreja },
      });
      const intro = await Intro.findOne({
        where: { id_perfil_igreja: perfilChurch.id_perfil_igreja },
      });

      const dataFimTeste = new Date(periodoTeste.data_inicio);
      dataFimTeste.setDate(dataFimTeste.getDate() + 30);


      const token = jwt.sign(
        {
          id_user: usuario.id_user,
          id_auth: auth.id_auth,
          id_perfil_user: perfilUser.id_perfil_user,
          id_perfil_church: perfilChurch.id_perfil_igreja,
          nome: perfilUser.nome,
          sobrenome: perfilUser.sobrenome,
          email: auth.email,
          avatar: avatar.avatar,
          id_plano: usuario.id_plano,
          id_nivel: usuario.id_nivel,
          id_status: usuario.id_status,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "6h",
        }
      );

      if (usuario.id_status == 2) {
        return res.status(405).send({
          mensagem: "Usuário não está ativo.",
        });
      } else if (new Date() > dataFimTeste) {
        return res.status(403).send({
          mensagem: "Período de teste expirado.",
          token: token,
          id_status: usuario.id_status,
          start: intro.status,
          id_status: usuario.id_status,
          id_nivel: usuario.id_nivel,
        });
      }

     

      return res.status(200).send({
        mensagem: "Autenticado com sucesso!",
        token: token,
        id_status: usuario.id_status,
        start: intro.status,
        id_status: usuario.id_status,
        id_nivel: usuario.id_nivel,
      });
    } else {
      return res.status(401).send({ mensagem: "Falha na autenticação." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  autenticarUsuario,
};
