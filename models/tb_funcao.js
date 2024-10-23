const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");


const Funcao = conn.define("tb_funcao", {
  id_funcao: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  funcao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  observacoes: {
    type: DataTypes.STRING,
    allowNull: true,
  }

}, { freezeTableName: true });


module.exports = Funcao;