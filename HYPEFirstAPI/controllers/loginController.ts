import type { Request, Response } from 'express';

export const loginController = (req: Request, res: Response) => {
    const pageTitle = 'Login Hype';
    res.render(`login`, { title: pageTitle });
}