// src/models/index.ts
import { Client } from './Client';
import { Restaurant } from './Restaurant';
import { Order } from './Order';

// Definir relaciones
Client.hasMany(Order);
Order.belongsTo(Client);

Restaurant.hasMany(Order);
Order.belongsTo(Restaurant);

export { Client, Restaurant, Order };