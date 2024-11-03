import { Request, Response, NextFunction } from 'express';
import { Order } from '../models/Order';

export class OrderController {
  public getAllOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  };

  public createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { description, clientId, restaurantId } = req.body;

    try {
      const order = await Order.create({ description, clientId, restaurantId });
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  };
}