import type { Response } from 'express';

export const redirect = (res: Response, route: string) => {
    res.redirect(302, route);
};