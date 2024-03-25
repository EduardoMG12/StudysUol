import express from 'express';
import { homeController } from '../controllers/homeController';
import { registerController } from '../controllers/registerController';
import { userRegisterController } from '../controllers/userRegisterController';
import { loginController } from '../controllers/loginController';
import { userLoginController } from '../controllers/userLoginController';

const router = express.Router();

router.get('/', homeController);

router.get('/register', registerController);

router.post('/register', userRegisterController);

router.get('/login', loginController);

router.post('/login', userLoginController);

export default router;