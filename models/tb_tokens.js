const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Token = conn.define(
  "tb_tokens",
  {
    id_token: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url_documentacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo_parceiro: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = Token;
