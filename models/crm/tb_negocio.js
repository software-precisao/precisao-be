const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../../data/conn");
const TipoNegocio = require("./tb_tipo_negocio");
const Origem = require("./tb_origem");
const Vendedor = require("./tb_vendedor");

const Negocio = conn.define(
  "tb_negocio",
  {
    id_negocio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo_prospeccao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome_prospect: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_tipo_negocio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_origem: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor_aproximado: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    id_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url_prospeccao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detalhe_negocio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nome_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagram_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebook_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedin_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    endereco_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cidade_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estado_lead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

Negocio.belongsTo(TipoNegocio, {
  foreignKey: "id_tipo_negocio",
  as: "tipoNegocio",
  foreignKeyConstraint: true,
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Negocio.belongsTo(Origem, {
  foreignKey: "id_origem",
  as: "origem",
  foreignKeyConstraint: true,
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Negocio.belongsTo(Vendedor, {
  foreignKey: "id_vendedor",
  as: "vendedor",
  foreignKeyConstraint: true,
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Negocio;
