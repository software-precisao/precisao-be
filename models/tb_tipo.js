const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Tipo = conn.define(
  "tb_tipo_cliente",
  {
    id_tipo_cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo_cliente: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

module.exports = Tipo;
