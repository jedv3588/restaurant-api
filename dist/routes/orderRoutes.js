"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderController_1 = require("../controllers/OrderController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
const orderController = new OrderController_1.OrderController();
// Aplicar el middleware de autenticación a todas las rutas
router.use(authMiddleware_1.authenticate);
// Definir las rutas
router.get('/', (req, res, next) => {
    orderController.getAllOrders(req, res, next);
});
router.post('/', (req, res, next) => {
    orderController.createOrder(req, res, next);
});
exports.default = router;
