const { Sequelize, DataTypes } = require("sequelize");

const conn = require("../data/conn");

const PerfilIgreja = conn.define(
  "tb_perfil_igreja",
  {
    id_perfil_igreja: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome_igreja: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qtd_membros: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    nif: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email_igreja: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inputs_ids: {
      type: DataTypes.JSON,
      allowNull: true, 
    }
  },
  { freezeTableName: true }
);


module.exports = PerfilIgreja;
