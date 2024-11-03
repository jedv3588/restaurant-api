"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Restaurant = exports.Client = void 0;
// src/models/index.ts
const Client_1 = require("./Client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return Client_1.Client; } });
const Restaurant_1 = require("./Restaurant");
Object.defineProperty(exports, "Restaurant", { enumerable: true, get: function () { return Restaurant_1.Restaurant; } });
const Order_1 = require("./Order");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return Order_1.Order; } });
// Definir relaciones
Client_1.Client.hasMany(Order_1.Order);
Order_1.Order.belongsTo(Client_1.Client);
Restaurant_1.Restaurant.hasMany(Order_1.Order);
Order_1.Order.belongsTo(Restaurant_1.Restaurant);
