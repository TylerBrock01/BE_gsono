import Bussines from "../models/Bussines";
import { Request, Response } from "express";

export const showchainBussines = async (req:Request,res:Response) => {
    const {chain} = req.query;
    console.log(chain)
    const bussinesExist = await Bussines.find({ chain: chain as string });

    if(bussinesExist.length>0){
        console.log('exist!')
        res.status(200).json(bussinesExist);
    }
    else{
        const error = new Error('Bussines no exist')
        res.status(404).json({error: error.message})
    }
};