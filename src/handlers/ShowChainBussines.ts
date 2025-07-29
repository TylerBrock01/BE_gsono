import Bussines from "../models/Bussines";
import { Request, Response } from "express";

export const showchainBussines = async (req:Request,res:Response) => {
    const {chain} = req.body;
    const bussinesExist = await Bussines.find({chain})

    if(bussinesExist.length !== 0){
        console.log('exist!')
        res.status(302).json(bussinesExist)
        return console.log('closed')
    }
    else{
        const error = new Error('Bussines no exist')
        res.status(404).json({error: error.message})
        return console.log('closed')
    }
};