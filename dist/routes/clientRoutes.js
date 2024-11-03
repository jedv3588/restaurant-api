"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientController_1 = require("../controllers/ClientController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
const clientController = new ClientController_1.ClientController();
// Aplicar el middleware de autenticación a todas las rutas
router.use(authMiddleware_1.authenticate);
// Definir las rutas
router.get('/', (req, res, next) => {
    clientController.getAllClients(req, res, next);
});
router.post('/', (req, res, next) => {
    clientController.createClient(req, res, next);
});
exports.default = router;
