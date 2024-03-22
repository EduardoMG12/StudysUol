import type { Request, Response } from 'express';

export const homeController = (req:Request, res: Response) => {
    res.send(`
    <div style="width:100vw; height: 100vh; display: flex; flex-direction:column; justify-content: center; align-items: center; background-color: gray; gap:20px; font-size: 30px;">
    <p>
    First Page!
    </p>

    <a href="/login" style="color:red; background-color: black; border-radius: 12px; padding: 10px 20px;">Login</a>
    </div>
    `);
};