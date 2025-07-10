import Bussines from "../models/Bussines";

 export const createBussiness = async (req,res) => {
    console.log('register:\n',req.body);
    const bussines = new Bussines(req.body);

    await bussines.save();
    res.send('register successfully\n'+bussines.toString());
};