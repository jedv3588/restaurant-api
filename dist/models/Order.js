"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
// src/models/Order.ts
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
class Order extends sequelize_1.Model {
}
exports.Order = Order;
Order.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    clientId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Clients',
            key: 'id',
        },
    },
    restaurantId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Restaurants',
            key: 'id',
        },
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: 'Order',
});
