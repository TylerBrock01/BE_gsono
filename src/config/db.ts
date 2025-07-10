import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGUITO)
        const url = `${connection.host}:${connection.port}`

        console.log(`connection established: ${url}`);
    }catch(e){
        // console.log(e);
        console.log(`Error connecting to DB: ${e.message}`);
        process.exit(1);
    }
}