const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Compromisso = conn.define(
  "tb_compromissos",
  {
    id_compromisso: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo_evento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    cor_evento: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  },
  { freezeTableName: true }
);

module.exports = Compromisso;
