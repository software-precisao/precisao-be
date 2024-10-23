const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");


const Cargo = conn.define("tb_cargo", {
  id_cargo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  observacoes: {
    type: DataTypes.STRING,
    allowNull: true,
  }

}, { freezeTableName: true });


module.exports = Cargo;