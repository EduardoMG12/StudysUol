import express from 'express'
import { homeController } from '../controllers/homeController'
import { getChatController, postChatController } from '../controllers/chatController'


const router = express.Router()

router.get('/', homeController)

router.get('/chat', getChatController)

router.post('/chat', postChatController)

export default router