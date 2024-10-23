const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const ControlePatrimonio = conn.define(
  "tb_controle_patrimonio",
  {
    id_patrimonio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_controle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado_conservacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fornecedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fabricante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serial_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_validade: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    preco_custo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    preco_venda: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

module.exports = ControlePatrimonio;
