import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const userRegisterController = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try{
        // Verified email exist
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
        }

        // Hash password
        const hashedPassowrd = await bcrypt.hash(password, 12);

        const newUser = await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: hashedPassowrd
            }
        })
        res.status(201).json(newUser);

    }catch(err){
        console.log(`error:${err}`);
        res.status(500).json({error: 'Internal Server Error'});
    }finally{
        await prisma.$disconnect();
    }
}
