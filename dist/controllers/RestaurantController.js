"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantController = void 0;
const Restaurant_1 = require("../models/Restaurant");
class RestaurantController {
    constructor() {
        this.getAllRestaurants = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const restaurants = yield Restaurant_1.Restaurant.findAll();
                res.json(restaurants);
            }
            catch (error) {
                next(error);
            }
        });
        this.createRestaurant = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, address, capacity } = req.body;
            try {
                const restaurant = yield Restaurant_1.Restaurant.create({ name, address, capacity });
                res.status(201).json(restaurant);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.RestaurantController = RestaurantController;
