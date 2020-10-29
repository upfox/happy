import express from 'express';

import { getRepository } from 'typeorm';

import Orphanage from './models/Orphanage';

import './database/connection';

// import routes from './routes';

// import './database/connection';

const app = express();

app.use(express.json());
// app.use(routes);

app.post("/orphanages", async (request, response) =>{
  const { 
    name ,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name ,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  await orphanagesRepository.save(orphanage);

  return response.json({message:"orfanato"});
});

app.listen(3333, () => {
  console.log('Server started!');
});