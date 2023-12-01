import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import {db, pgp} from './db';

dotenv.config();

//Initialize app
const app = express(); 

// Example function to run a simple query
async function getCountry(countryId: number) {
    try {
        const country: string = await db.one('SELECT * FROM country WHERE country_id = $1', countryId);
        console.log(country);
    } catch (error) {
        console.error('Error:', error);
    }
}

getCountry(1);
getCountry(2);

parseInt(process.env.PORT!)


// Middlewares
app.use(bodyParser.json());
app.use(cors()); //Cross origin resource sharing
app.use(morgan('dev')) // Logger


// Routes
const registerRoutes = require('./routes/register')
app.use("/register", registerRoutes);


//Test Route
const indexRoutes = require('./routes/index');
app.use("/", indexRoutes);


//favicon.ico automatic request handler
app.get('/favicon.ico', (req : Request, res : Response) => {
    res.status(204).end();
  });

// Invalid routes
app.get('*', (req: Request, res: Response) => {
    res.status(404).send('Error Page 404');
});

// Export the fully configured app instance
export default app;