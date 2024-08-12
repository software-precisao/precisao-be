const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Metas = conn.define(
  "tb_meta_vendas",
  {
    id_meta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    mes_ref: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    valor_previsto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    valor_realizado: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status_meta: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
  },
  { freezeTableName: true }
);


module.exports = Metas;
