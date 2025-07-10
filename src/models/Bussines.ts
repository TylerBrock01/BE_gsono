import mongoose, {Schema} from 'mongoose';

export interface IBussines {
    name: string,
    logo: string,
    location: string,
    social: string,
    social0: string,
}

const bussinesSchema = new Schema({
    name: {
        String,
        required: true, trim: true, unique: true
    },
    logo: {String, required: true, trim: true, unique: true},
    location: {String, required: true, trim: true},
    social: String,
    social0: String
})

const Bussines = mongoose.model<IBussines>('bussines', bussinesSchema);
export default Bussines;