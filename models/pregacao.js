const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Pregacao = conn.define(
  "tb_pregacao",
  {
    id_pregacao: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dia_pregacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    objetivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tema: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    referencia_pre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capitulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    verso: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    introducao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    observacoes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    duvidas: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = Pregacao;
