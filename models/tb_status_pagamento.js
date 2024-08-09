const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Perfil = require("./tb_perfil_igreja");

const StatusPagamento = conn.define(
  "tb_status_pagamento",
  {
    id_status_pagamento: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor_pago: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    data_pagamento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

StatusPagamento.belongsTo(Perfil, {
  foreignKey: "id_perfil",
  foreignKeyConstraint: true,
});

module.exports = StatusPagamento;
