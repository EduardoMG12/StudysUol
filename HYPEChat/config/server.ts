import express from 'express';
import bodyParser from 'body-parser';
import router from '../app/routes';
import path, { join } from 'path';


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

app.use(express.static(join(__dirname, '/../app/public')));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);




export default app;
