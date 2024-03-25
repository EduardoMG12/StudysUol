import { PrismaClient } from '@prisma/client';
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { redirectToLogin } from '../helpers/redirectLogin';

const prisma = new PrismaClient();


export const authenticationJWTMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.cookies.Authorization;

    if (!token) {
        redirectToLogin(res)
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
        // Continue with your authentication logic
        next();
    } catch (err) {
        console.log(`Authentication error: ${err}`);
        redirectToLogin(res)
    }
};
