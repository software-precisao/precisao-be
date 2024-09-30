const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");

const TipoNegocio = conn.define(
  "tb_tipo_negocio",
  {
    id_tipo_negocio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = TipoNegocio;
