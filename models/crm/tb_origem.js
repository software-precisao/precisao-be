const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const Origem = conn.define(
  "tb_origem",
  {
    id_origem: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    origem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = Origem;
