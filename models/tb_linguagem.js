const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Linguagem = conn.define("tb_linguagem", {
  id_linguagem: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  linguagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Linguagem;
