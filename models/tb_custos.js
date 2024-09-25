const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Custo = conn.define(
  "tb_custo",
  {
    id_custo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: { 
      type: DataTypes.ENUM("fixo", "variavel"),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    dataRegistro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  { freezeTableName: true }
);

module.exports = Custo;
