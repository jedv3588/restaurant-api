import { Router } from 'express';
import { RestaurantController } from '../controllers/RestaurantController';
import { authenticate } from '../middlewares/authMiddleware';
import { Request, Response, NextFunction } from 'express';

const router = Router();
const restaurantController = new RestaurantController();

// Aplicar el middleware de autenticación a todas las rutas
router.use(authenticate as any);

// Definir las rutas
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  restaurantController.getAllRestaurants(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  restaurantController.createRestaurant(req, res, next);
});

export default router;