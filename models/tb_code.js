const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Code = conn.define(
  "tb_code",
  {
    id_code: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[0-9]{4}$/,
      },
    },
  },
  { freezeTableName: true }
);


module.exports = Code;
