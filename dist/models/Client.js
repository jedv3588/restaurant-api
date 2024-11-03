"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
// src/models/Client.ts
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
class Client extends sequelize_1.Model {
}
exports.Client = Client;
Client.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 18, // Solo adultos
        },
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: 'Client',
});
