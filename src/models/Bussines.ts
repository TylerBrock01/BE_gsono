import mongoose, {Schema} from 'mongoose';

export interface IBussines {
    name: string,
    logo: string,
    location: string,
    social: string,
    social0: string,
    history: string,
    price:{
        low: number,
        high: number,
    }
}

const bussinesSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    logo: {type: String,required: true, trim: true, unique: true},
    location: {type: String, required: true, trim: true},
    social: String,
    social0: String,
    history: {type: String, required: true, trim: true},
    price: {
        low: {type: Number, required: true, trim: true},
        high: {type: Number, required: true, trim: true},
    }
})

const Bussines = mongoose.model<IBussines>('Bussines', bussinesSchema);
export default Bussines;