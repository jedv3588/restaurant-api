// src/database/init.ts
import { sequelize } from './connection';
import '../models';

export const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // force: true borrará y recreará las tablas
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
    process.exit(1);
  }
};