import { Request, Response, NextFunction } from 'express';
import { Restaurant } from '../models/Restaurant';

export class RestaurantController {
  public getAllRestaurants = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const restaurants = await Restaurant.findAll();
      res.json(restaurants);
    } catch (error) {
      next(error);
    }
  };

  public createRestaurant = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, address, capacity } = req.body;

    try {
      const restaurant = await Restaurant.create({ name, address, capacity });
      res.status(201).json(restaurant);
    } catch (error) {
      next(error);
    }
  };
}