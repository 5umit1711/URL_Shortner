import express from 'express'
import connection from './config/dbConnect.js';
import bodyParser from 'body-parser';
import urlRouter from './routes/urlRoutes.js';

const PORT = 8000;
const app = express();
app.use(bodyParser.json());

app.use("/", urlRouter);

app.listen(PORT, ()=>{
    connection();
    console.log(`Server started`);
})