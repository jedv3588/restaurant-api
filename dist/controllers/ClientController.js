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
exports.ClientController = void 0;
const Client_1 = require("../models/Client");
class ClientController {
    constructor() {
        this.getAllClients = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield Client_1.Client.findAll();
                res.json(clients);
            }
            catch (error) {
                next(error);
            }
        });
        this.createClient = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, phone, age } = req.body;
            if (age < 18) {
                res.status(400).json({ error: 'Solo se permiten adultos' });
                return;
            }
            try {
                const client = yield Client_1.Client.create({ name, email, phone, age });
                res.status(201).json(client);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ClientController = ClientController;
