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
