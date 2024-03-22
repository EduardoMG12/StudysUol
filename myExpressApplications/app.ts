import express from "express";
import routes from './routes/index';

const app = express();
const port = 3000;

// Configure Express for use EJS how your visualization mechanism.
app.set('view engine', 'ejs'); 
//Define the location of your views folder.
app.set('views', './views');


// Serve static files from the public folder
app.use(express.static('public'));


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


