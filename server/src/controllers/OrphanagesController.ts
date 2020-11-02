import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';

import * as Yup from 'yup';


export default{
    // index = list; show = id; update; delete
    async index(request: Request, response: Response){
        
        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanages = await orphanagesRepository.find({
            relations:['images']
        });
        // const orphanages = await orphanagesRepository.find({where});

        return response.json(orphanageView.renderMany(orphanages));
        
    },
    async show(request: Request, response: Response){
        
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })
        // const orphanages = await orphanagesRepository.find({where});

        return response.json(orphanageView.render(orphanage));
        
    },
    async create(request: Request, response: Response){
        
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
    
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image =>{
            return { path: image.filename }
        });

        const data = {
            name ,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude:Yup.number().required(),
            about: Yup.string().required('About é requerido').max(360),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            })
            )
        });
        
        await schema.validate(data, {
            // Retorna todos os erros e não somente o primeiro erro encontrado!
            abortEarly:false
        });

        const orphanage = orphanagesRepository.create(data);
        
        await orphanagesRepository.save(orphanage);
    
        // return response.json({message:"orfanato"});
    
        // Quando algo é criado utiliza-se o 201
        return response.status(201).json({message:orphanage});
    }
};