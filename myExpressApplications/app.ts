import express from "express";
import routes from './routes/index';

const app = express();
const port = 3000;
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// app is an instance of express.
// METHOD is an HTTP request method, in lowercase, which is use after app.
// PATH is a path on the server also call endpoint.
// HANDLER is the function executed when the route is matched.

app.use('/', routes);

app.listen(port, () => {
    console.clear()
    console.log(`server is running 🚀🚀`)
    console.log(`http://localhost:${port}/`)
})


