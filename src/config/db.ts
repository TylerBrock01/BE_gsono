import mongoose from 'mongoose';
import color from 'colors'
export const connectDB = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGUITO)
        const url = `${connection.host}:${connection.port}`

        console.log(color.inverse.green(`\tConnected to MongoDB\t ${url}`));
    }catch(e){
        // console.log(e);
        console.log(`Error connecting to DB: ${e.message}`);
        process.exit(1);
    }
}