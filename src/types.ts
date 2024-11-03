import { Request } from 'express';

export interface UserPayload {
  id: number;
  // otros campos necesarios
}

export interface RequestWithUser extends Request {
  user?: UserPayload;
}