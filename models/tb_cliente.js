const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");
const Tipo = require("./tb_tipo");

const Cliente = conn.define(
  "tb_cliente",
  {
    id_cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    razao_social: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_tipo_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

Cliente.belongsTo(Tipo, {
  foreignKey: "id_tipo_cliente",
  as: "tipo",
  foreignKeyConstraint: true,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

module.exports = Cliente;
