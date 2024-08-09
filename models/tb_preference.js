const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Perfil = require("./tb_perfil_igreja");

const Preference = conn.define(
  "tb_preference",
  {
    id_preference: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    toda_igreja: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gestao_kids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    secretaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tesouraria: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    midia: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_perfil_igreja: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

Preference.belongsTo(Perfil, {
  foreignKey: "id_perfil_igreja",
});

module.exports = Preference;
