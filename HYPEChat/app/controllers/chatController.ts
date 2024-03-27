import type { Request, Response } from "express";
import { redirect } from "../helpers/redirect";
import { socketio } from "../../app";
import app from "../../config/server";

export const getChatController = (req:Request, res:Response) => {
    const title = 'Multiroom Chat'
    res.render('chat', {title: title})
}

export const postChatController = (req:Request, res: Response) => {
    const { userName } = req.body
    
    if(!userName){
        return res.status(400).json({ error: 'Username is required' })
    }

    socketio.emit('userJoined', { userName: userName, mesage: 'Joined in chat' })
    socketio.emit('newMsgForClient', {userName: userName, mesage: `mesage`})
    socketio.emit('disconnect', {userName: userName , message:'user left chat'})
    //logic form

    redirect(res, '/chat')
}