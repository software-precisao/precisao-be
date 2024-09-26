const { Sequelize, DataTypes } = require("sequelize");

const conn = require("../data/conn");

const Auth = require('./tb_auth');
const Status = require('./tb_status');
const Nivel = require('./tb_nivel');
const Plano = require('./tb_plano');
const Preference = require('./tb_preference');
const PerfilChurch = require('./tb_perfil_igreja');
const PerfilUser = require('./tb_perfil_user');

const Usuario = conn.define(
  "tb_usuario",
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    id_auth: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_plano: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_preference: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_status_pagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_perfil_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_perfil_igreja: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

Usuario.belongsTo(Auth, { foreignKey: 'id_auth', as: 'auth' });
Usuario.belongsTo(Status, { foreignKey: 'id_status', as: 'status' });
Usuario.belongsTo(Nivel, { foreignKey: 'id_nivel', as: 'nivel' });
Usuario.belongsTo(Plano, { foreignKey: 'id_plano', as: 'plano' });
Usuario.belongsTo(Preference, { foreignKey: 'id_preference', as: 'preference' });
Usuario.belongsTo(PerfilUser, { foreignKey: 'id_perfil_user', as: 'perfilUser' });
Usuario.belongsTo(PerfilChurch, { foreignKey: 'id_perfil_igreja', as: 'perfilIgreja' });

module.exports = Usuario;
