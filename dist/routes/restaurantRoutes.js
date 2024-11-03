"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RestaurantController_1 = require("../controllers/RestaurantController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
const restaurantController = new RestaurantController_1.RestaurantController();
// Aplicar el middleware de autenticación a todas las rutas
router.use(authMiddleware_1.authenticate);
// Definir las rutas
router.get('/', (req, res, next) => {
    restaurantController.getAllRestaurants(req, res, next);
});
router.post('/', (req, res, next) => {
    restaurantController.createRestaurant(req, res, next);
});
exports.default = router;
