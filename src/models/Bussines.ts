import mongoose, {Schema} from 'mongoose';

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

const Bussines = mongoose.model('bussines', bussinesSchema);
export default Bussines;