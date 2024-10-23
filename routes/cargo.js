const express = require("express");
const router = express.Router();
const cargoController = require("../controllers/cargo/cargoController");

router.get("/", cargoController.getCargo);

router.get("/:id_cargo", cargoController.getCargoById);

router.post("/cadastrar", cargoController.createCargo);

router.put("/editar/:id_cargo", cargoController.updateCargo);

router.delete("/deletar/:id_cargo", cargoController.deleteCargo);

module.exports = router;
