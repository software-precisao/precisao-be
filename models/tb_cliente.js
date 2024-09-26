const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");


const Cliente = conn.define(
  "tb_cliente",
  {
    id_cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    razao_social: {
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
      allowNull: false,
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  { freezeTableName: true }
);


module.exports = Cliente;
