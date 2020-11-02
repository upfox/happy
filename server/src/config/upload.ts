import multer from 'multer';
import path from 'path';

export default {
    
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..','..','uploads'),
        filename: (request, file, cb)=>{
            const fileName = `${Date.now()}-${file.originalname}`;
            // Erro como primeiro parâmetro, nome do arquivo como segundo
            cb(null, fileName);
        }
    }),
};