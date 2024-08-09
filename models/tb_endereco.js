const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Perfil = require("./tb_perfil");

const Endereco = conn.define("tb_endereco", {
  id_endereco: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  complemento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_perfil: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, { freezeTableName: true });


Endereco.belongsTo(Perfil, {
  foreignKey: "id_perfil",
});


module.exports = Endereco;