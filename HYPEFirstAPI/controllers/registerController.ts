import type { Request, Response } from 'express';

export const registerController = (req: Request, res: Response) => {
    const pageTitle = 'Register Hype';
    const error = req.query.error; 
    res.render(`register`, { title: pageTitle, error: error }); 
}
