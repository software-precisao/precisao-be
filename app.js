const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger");

const Plano = require('./models/tb_plano');
const ItemPlano = require('./models/tb_itens_plano');

const rotaLogin = require("./routes/login");
const rotaNivel = require("./routes/nivel");
const rotaStatus = require("./routes/status");
const rotaUsuario = require("./routes/usuario");
const rotaPerfilIgreja = require("./routes/perfilIgreja");
const rotaPlano = require("./routes/plano");
const rotaTermo = require("./routes/termo");
const rotaInput = require("./routes/input");
const rotaProjeto = require("./routes/projeto");
const rotaIntro = require("./routes/intro")
const rotaAvatar = require("./routes/avatar")
const rotaPreference = require("./routes/preference")
const rotaPerfilUser = require("./routes/perfilUser")
const rotaProspect = require("./routes/prospect")
const rotaTrial = require("./routes/trial")
const rotaCliente = require("./routes/cliente")
const rotaProposta = require("./routes/proposta")
const rotaCustos = require("./routes/custos")
const rotaStatusProjeto = require("./routes/status_projeto")
const rotaTipoCliente = require("./routes/tipo")
const rotaOrigem = require("./routes/crm/origem")
const rotaNegocio = require("./routes/crm/negocio")
const rotaTipoNegocio = require("./routes/crm/tipoNegocio")
const rotaVendedor = require("./routes/crm/vendedor")
const rotaLinguagem = require("./routes/linguagem")
const rotaFunil = require("./routes/crm/funil")
const rotaToken = require("./routes/token")
const rotaDevesenvolvedor = require("./routes/crm/desenvolvedor")
const rotaFuncao = require("./routes/funcao")
const rotaCargo = require("./routes/cargo")
const rotaMembro = require("./routes/membros")
const rotaControlePatrimonio = require("./routes/controlePatrimonio")
const rotaPregacao = require("./routes/pregacao")
const rotaCompromisso = require("./routes/compromisso")

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET, OPTIONS"
    );
    return res.status(200).send({});
  }
  next();
});


app.use("/login", rotaLogin);
app.use("/nivel", rotaNivel);
app.use("/status", rotaStatus);
app.use("/usuario", rotaUsuario);
app.use("/perfil-igreja", rotaPerfilIgreja);
app.use("/planos", rotaPlano);
app.use("/termo", rotaTermo);
app.use("/input", rotaInput);
app.use("/projeto", rotaProjeto);
app.use("/intro", rotaIntro);
app.use("/avatar", rotaAvatar)
app.use("/preference", rotaPreference)
app.use("/perfil-user", rotaPerfilUser)
app.use("/prospect", rotaProspect)
app.use("/trial", rotaTrial)
app.use("/cliente", rotaCliente)
app.use("/proposta", rotaProposta)
app.use("/custo", rotaCustos)
app.use("/status-projeto", rotaStatusProjeto)
app.use("/tipo-cliente", rotaTipoCliente)
app.use("/vendedor", rotaVendedor)
app.use("/tiponegocio", rotaTipoNegocio)
app.use("/negocios", rotaNegocio)
app.use("/vendedor", rotaVendedor)
app.use("/origem", rotaOrigem)
app.use("/linguagem", rotaLinguagem)
app.use("/funil", rotaFunil)
app.use("/token", rotaToken)
app.use("/dev", rotaDevesenvolvedor)
app.use("/funcao", rotaFuncao)
app.use("/cargo", rotaCargo)
app.use("/membro", rotaMembro)
app.use("/controle-patrimonio", rotaControlePatrimonio)
app.use("/pregacao", rotaPregacao)
app.use("/compromisso", rotaCompromisso)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/api-test", (req, res) => {
  res.status(200).json({ message: "OK! Tudo funcionando..." });
});


Plano.hasMany(ItemPlano, {
  foreignKey: 'id_plano',
  as: 'itensPlano'
});

ItemPlano.belongsTo(Plano, {
  foreignKey: 'id_plano',
  as: 'Plano'
});

app.use(express.static("public"));

app.use((req, res, next) => {
  const erro = new Error("Rota não encontrada");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.mensagem,
    },
  });
});

module.exports = app;
