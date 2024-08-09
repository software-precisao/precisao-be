const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Input = require("./tb_inputs");
const Perfil = require("./tb_perfil_igreja");

const ModelForm = conn.define(
  "tb_model_form",
  {
    id_model_form: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_input: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

ModelForm.belongsTo(Input, {
  foreignKey: "id_input",
});

ModelForm.belongsTo(Perfil, {
  foreignKey: "id_perfil",
});

module.exports = ModelForm;
