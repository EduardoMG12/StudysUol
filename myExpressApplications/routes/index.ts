import express from 'express';
import { homeController } from '../controllers/homeController';
import { registerController } from '../controllers/registerController';

const router = express.Router();

router.get('/', homeController);

router.get('/register', registerController);

export default router;