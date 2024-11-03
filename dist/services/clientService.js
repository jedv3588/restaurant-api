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
exports.getClientById = exports.createClient = void 0;
// src/services/clientService.ts
const Client_1 = require("../models/Client");
const createClient = (clientData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Client_1.Client.create(clientData);
});
exports.createClient = createClient;
const getClientById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Client_1.Client.findByPk(id);
});
exports.getClientById = getClientById;
// ... más funciones
