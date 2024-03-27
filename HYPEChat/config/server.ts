import express from 'express'
import bodyParser from 'body-parser'
import { check } from 'express-validator'
import router from '../app/routes'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))

app.use(bodyParser.urlencoded({extended: true}))


// make autoload routes models and controller for file app

// future middleware
// const validationMiddleware = [
//     check('email').isEmail(),
//     check('password').isLength({ min: 6 })
//   ]

app.use('/', router)

export default app;