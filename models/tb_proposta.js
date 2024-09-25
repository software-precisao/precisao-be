const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../data/conn");

const Proposta = conn.define(
  "tb_proposta",
  {
    id_proposta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    custosFixos: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    custosVariaveis: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    colaboradores: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    custoTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    codigo_proposta: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { freezeTableName: true }
);


Proposta.prototype.calcularTotal = function () {
  const totalCustosFixos = this.custosFixos
    ? this.custosFixos.reduce((acc, custo) => acc + custo.valor, 0)
    : 0;
  const totalCustosVariaveis = this.custosVariaveis
    ? this.custosVariaveis.reduce((acc, custo) => acc + custo.valor, 0)
    : 0;
  const totalColaboradores = this.colaboradores
    ? this.colaboradores.reduce((acc, colaborador) => {
        return acc + colaborador.valorHora * colaborador.horasTrabalhadas;
      }, 0)
    : 0;

  this.custoTotal =
    totalCustosFixos + totalCustosVariaveis + totalColaboradores;
};

module.exports = Proposta;
