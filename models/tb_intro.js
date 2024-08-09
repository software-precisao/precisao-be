const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Perfil = require("./tb_perfil_igreja");

const Intro = conn.define("tb_intro", {
  id_intro: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_perfil_igreja: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, { freezeTableName: true });


Intro.belongsTo(Perfil, {
  foreignKey: "id_perfil_igreja",
});


module.exports = Intro;