const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Auth = conn.define(
  "tb_auth",
  {
    id_auth: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  },
  { freezeTableName: true }
);


module.exports = Auth;
