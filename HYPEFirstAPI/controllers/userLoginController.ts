import type {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import env from 'dotenv';
env.config();

const prisma = new PrismaClient()



export const userLoginController = async (req:Request, res:Response) => {
    const {email, password} = req.body;

    try{
        // Verified email exist
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })   

        if(!user){
            return res.status(400).json({message: 'Invalid credentials'});
        }

        const passwrodMatch = await bcrypt.compare(password, user.password);

        if(!passwrodMatch){
            return res.status(401).json({message: 'Invalid credentials'});
        }

        //Generate JWT

        const expireInSeconds = 60 * 60;

        const tokenOptions = {expiresIn:expireInSeconds}

        const token = jwt.sign({userEmail : user.email}, process.env.JWT_SECRET as string , tokenOptions);

        res.cookie('Authorization', token, {
            secure: true,
          });
      


        res.status(200).json({token});
    } catch (err) {
        console.log(`Error:${err}`)
        return res.status(500).json({error: 'Internal Server Error'});
    } finally {
        await prisma.$disconnect();
    }


}