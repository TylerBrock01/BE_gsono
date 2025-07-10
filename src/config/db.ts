import mongoose from 'mongoose';
console.log(process.env.MONGUITO);

export const connectDB = async () => {
    try{
        const url = process.env.MONGUITO
        const {connection} = await mongoose.connect(url)
        const url2 = `${connection.host}:${connection.port}`

        console.log(`Connected to DB: ${url2}`);
    }catch(e){
        // console.log(e);
        console.log(`Error connecting to DB: ${e.message}`);
        process.exit(1);
    }
}