// src/models/Client.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Client extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public age!: number;
}

Client.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 18, // Solo adultos
    },
  },
}, {
  sequelize,
  modelName: 'Client',
});
