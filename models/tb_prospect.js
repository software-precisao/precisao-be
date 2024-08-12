const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Prospect = conn.define(
  "tb_prospect",
  {
    id_prospect: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_responsavel: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_fase: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    origem: {
      type: DataTypes.INTEGER,
      allowNull: true,  
    },
    valor_projeto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    doc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = Prospect;
