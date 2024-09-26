const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const StatusProjeto = conn.define("tb_status_projeto", {
  id_status_projeto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = StatusProjeto;
