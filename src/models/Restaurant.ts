// src/models/Restaurant.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Restaurant extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public capacity!: number;
}

Restaurant.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Restaurant',
});