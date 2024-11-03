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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("./database/connection");
const init_1 = require("./database/init");
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const restaurantRoutes_1 = __importDefault(require("./routes/restaurantRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_1 = __importDefault(require("./swagger"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const errorHandler_1 = require("./middlewares/errorHandler");
const config_1 = __importDefault(require("config"));
const logger_1 = __importDefault(require("./utils/logger"));
dotenv_1.default.config();
const PORT = config_1.default.get('server.port');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(errorHandler_1.errorHandler);
// Rutas
app.use('/api/clients', clientRoutes_1.default);
app.use('/api/restaurants', restaurantRoutes_1.default);
app.use('/api/orders', orderRoutes_1.default);
// Inicializar base de datos y servidor
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.connectDB)();
        yield (0, init_1.initializeDatabase)();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
});
startServer();
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
// Usar el logger en la aplicación
app.use((req, res, next) => {
    logger_1.default.info(`${req.method} ${req.url}`);
    next();
});
exports.default = app;
