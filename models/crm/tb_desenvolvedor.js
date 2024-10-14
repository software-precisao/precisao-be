const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const Vendedor = conn.define(
  "tb_desenvolvedores",
  {
    id_dev: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    desenvolvedor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    valor_hora: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = Vendedor;
