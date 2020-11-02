import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';
 

const routes = Router();
const upload = multer(uploadConfig);

// MVC
// Model = Tabela no banco
// Views = Mostrada
// Controllers = Como são armazenados

// routes.post("/orphanages", async (request, response) =>{
// });
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);

routes.post("/orphanages", upload.array('images') ,OrphanagesController.create);
  
export default routes;