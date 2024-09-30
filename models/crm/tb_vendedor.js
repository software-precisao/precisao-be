const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const Vendedor = conn.define(
  "tb_vendedores",
  {
    id_vendedor: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vendedor_responsavel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = Vendedor;
