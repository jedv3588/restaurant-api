import { Request, Response, NextFunction } from 'express';
import { Client } from '../models/Client';

export class ClientController {
  public getAllClients = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const clients = await Client.findAll();
      res.json(clients);
    } catch (error) {
      next(error);
    }
  };

  public createClient = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, email, phone, age } = req.body;

    if (age < 18) {
      res.status(400).json({ error: 'Solo se permiten adultos' });
      return;
    }

    try {
      const client = await Client.create({ name, email, phone, age });
      res.status(201).json(client);
    } catch (error) {
      next(error);
    }
  };
}