const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const PerfilChurch = require("./tb_perfil_igreja");

const Trial = conn.define(
  "tb_trial",
  {
    id_trial: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_perfil_igreja: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

Trial.belongsTo(PerfilChurch, {
  foreignKey: "id_perfil_igreja",
  foreignKeyConstraint: true,
});

module.exports = Trial;
