const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Inputs = conn.define(
  "tb_inputs",
  {
    id_input: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_input: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    input: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    required: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

module.exports = Inputs;
