// src/models/Order.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Order extends Model {
  public id!: number;
  public description!: string;
  public clientId!: number;
  public restaurantId!: number;
}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Clients',
      key: 'id',
    },
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Restaurants',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Order',
});