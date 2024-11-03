import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';
import { authenticate } from '../middlewares/authMiddleware';
import { Request, Response, NextFunction } from 'express';

const router = Router();
const orderController = new OrderController();

// Aplicar el middleware de autenticación a todas las rutas
router.use(authenticate as any);

// Definir las rutas
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  orderController.getAllOrders(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  orderController.createOrder(req, res, next);
});

export default router;