import type { Response } from 'express';

export const redirectToLogin = (res: Response) => {
    res.redirect(302, '/login');
};