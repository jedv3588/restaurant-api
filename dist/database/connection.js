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
exports.connectDB = exports.sequelize = void 0;
// src/database/connection.ts
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
exports.sequelize = new sequelize_1.Sequelize(config_1.dbConfig.database, config_1.dbConfig.username, config_1.dbConfig.password, {
    host: config_1.dbConfig.host,
    dialect: config_1.dbConfig.dialect,
    logging: config_1.dbConfig.logging,
    port: config_1.dbConfig.port,
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.sequelize.authenticate();
        console.log('Database connection established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
});
exports.connectDB = connectDB;
