import Bussines from "../models/Bussines";
import { Request, Response } from "express";

 export const createBussiness = async (req:Request,res:Response) => {
     const {name} = req.body;
     const bussinesExist = await Bussines.find({name})

     if(bussinesExist){
         const error = new Error('Bussines already exist')
         res.status(409).json({error: error.message})
         return console.log('closed')
     }
     else{
         const bussines = new Bussines(req.body)
         await bussines.save()
         res.status(201).send('bussines register successfully')
         return console.log('closed')
     }
};