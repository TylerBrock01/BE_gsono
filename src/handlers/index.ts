import Bussines from "../models/Bussines";
import { Request, Response } from "express";

 export const createBussiness = async (req:Request,res:Response) => {
     const {name} = req.body;
     const bussinesExist = await Bussines.findOne({name})

     if(bussinesExist){
         res.status(409).send('Bussines already exist')
         return console.log('closed')
     }
     else{
         const bussines = new Bussines(req.body)
         await bussines.save()
         res.status(201).send('Bussines register successfully\n'+bussines.toString())
         return console.log('closed')
     }
};