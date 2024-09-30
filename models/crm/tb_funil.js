const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");
const Negocio = require("./tb_negocio");

const Funil = conn.define(
  "tb_funil",
  {
    id_funil: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    funil: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);


module.exports = Funil;
