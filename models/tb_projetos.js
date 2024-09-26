const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");
const Cliente = require("./tb_cliente");
const StatusProjeto = require("./tb_status_projeto");

const Projeto = conn.define(
  "tb_projeto",
  {
    id_projeto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nome_projeto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    valor_projeto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    valor_pago_inicial: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    linguagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    repositorio_front: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    repositorio_back: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link_miro: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link_jira: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_status_projeto: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

Projeto.belongsTo(Cliente, {
  foreignKey: "id_cliente",
  as: "cliente",
  foreignKeyConstraint: true,
});

Projeto.belongsTo(StatusProjeto, {
  foreignKey: "id_status_projeto",
  as: "statusProjeto",
  foreignKeyConstraint: true,
});

module.exports = Projeto;
