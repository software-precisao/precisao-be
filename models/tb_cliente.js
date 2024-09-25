const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Projeto = require('./tb_projetos');

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
    id_projeto: {
      type: DataTypes.INTEGER,
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

Cliente.belongsTo(Projeto, { foreignKey: 'id_projeto', as: 'Projeto' })

module.exports = Cliente;
