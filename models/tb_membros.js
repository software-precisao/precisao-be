const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Membro = conn.define(
  "tb_membros",
  {
    id_membro: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nome_pai: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nome_mae: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    profissao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_filiacao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    data_batismo: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    id_funcao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_cargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    observacoes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = Membro;
