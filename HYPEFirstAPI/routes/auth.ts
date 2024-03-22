import { userRegisterController } from '../controllers/userRegisterController';
import express from 'express';
import { homeController } from '../controllers/homeController';

const router = express.Router();

router.post('/register', userRegisterController);

router.post('/login', homeController);


export default router;