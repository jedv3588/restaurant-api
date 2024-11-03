import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';
import { authenticate } from '../middlewares/authMiddleware';
import { Request, Response, NextFunction } from 'express';

const router = Router();
const clientController = new ClientController();

// Aplicar el middleware de autenticación a todas las rutas
router.use(authenticate as any);

// Definir las rutas
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  clientController.getAllClients(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  clientController.createClient(req, res, next);
});

export default router;