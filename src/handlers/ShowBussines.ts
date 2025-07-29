import Bussines from "../models/Bussines";
import { Request, Response } from "express"

export const showBussines = async (req:Request,res:Response) => {
    const {name} = req.body;
    const bussinesExist = await Bussines.findOne({name})

    if(bussinesExist){
        const bussines = new Bussines(bussinesExist)
        res.status(302).json(bussines)
        return console.log('closed')
    }
    else{
        const error = new Error('Bussines no exist')
        res.status(404).json({error: error.message})
        return console.log('closed')
    }
}