const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const PerfilIgreja = require("./tb_perfil_igreja");

const Logo = conn.define("tb_logo", {
  id_logo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_perfil_igreja: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, { freezeTableName: true });


Logo.belongsTo(PerfilIgreja, {
  foreignKey: "id_perfil_igreja",
});


module.exports = Logo;