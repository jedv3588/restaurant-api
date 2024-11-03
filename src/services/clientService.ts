// src/services/clientService.ts
import { Client } from '../models/Client';

export const createClient = async (clientData: any) => {
  return await Client.create(clientData);
};

export const getClientById = async (id: number) => {
  return await Client.findByPk(id);
};

// ... más funciones