import express from 'express';

import path from 'path';

import cors from 'cors';

import 'express-async-errors';
/* import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage'; */
import './database/connection';

import routes from './routes';

import errorHandler from './errors/handler';

const app = express();

// app.use(cors({
//   origin: 'https://localhost/front-end'
// }));

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..','uploads')));

app.use(errorHandler);


app.listen(`${process.env.SERVER_PORT}`, () => {
  console.log('Server started!');
});