"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
// src/models/Restaurant.ts
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
class Restaurant extends sequelize_1.Model {
}
exports.Restaurant = Restaurant;
Restaurant.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    capacity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: 'Restaurant',
});
