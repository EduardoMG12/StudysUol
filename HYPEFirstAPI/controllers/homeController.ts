import type { Request, Response } from 'express';

export const homeController = (req:Request, res: Response) => {
    const pageTitle = 'Home Hype';
    res.render(`home`, {title: pageTitle});
};