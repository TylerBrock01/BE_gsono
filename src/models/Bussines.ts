import mongoose, {Schema} from 'mongoose';

export interface IBussines {
    name: string,
    logo: string,
    location: string,
    social: string,
    social0: string,
    description: string,
    chain : string
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
    description: {type: String, required: true, trim: true},
    chain:{
        type: String,
        trim: true,
        required: true,

    }
})

const Bussines = mongoose.model<IBussines>('Bussines', bussinesSchema);
export default Bussines;