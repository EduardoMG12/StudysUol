import express from 'express'
import type { Request, Response } from 'express'


const router = express()



router.get('/', (req:Request, res:Response) => {
    res.send('Hello World')
})

export default router