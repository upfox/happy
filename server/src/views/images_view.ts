import Image from '../models/Image';


export default {
    render(image: Image){
        return {

            id: image.id,
            path: `${process.env.SERVER_PROTOCOL}://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/uploads/${image.path}`            
        };
    },
    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
}