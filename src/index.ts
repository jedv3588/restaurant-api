import express from 'express';
import cors from 'cors';
import { connectDB } from './database/connection';
import { initializeDatabase } from './database/init';
import clientRoutes from './routes/clientRoutes';
import restaurantRoutes from './routes/restaurantRoutes';
import orderRoutes from './routes/orderRoutes';
import dotenv from 'dotenv';
import { sequelize } from './database';
import swaggerSpec from './swagger';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './middlewares/errorHandler';
import config from 'config';
import logger from './utils/logger';

dotenv.config();
const PORT = config.get<number>('server.port');

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Rutas
app.use('/api/clients', clientRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

// Inicializar base de datos y servidor
const startServer = async () => {
  try {
    await connectDB();
    await initializeDatabase();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Usar el logger en la aplicación
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

export default app;