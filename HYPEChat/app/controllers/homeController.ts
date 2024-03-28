import type { Request, Response } from 'express';

export const homeController = (req:Request, res:Response) => {
    const title = 'Multiroom Chat';
    res.render('index', {title: title});
};