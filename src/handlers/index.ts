import Bussines from "../models/Bussines";
import { Request, Response } from "express";

 export const createBussiness = async (req:Request,res:Response) => {
     const {name} = req.body;
     const bussinesExist = await Bussines.findOne({name})

     if(bussinesExist){
         res.status(400).send('Bussines already exist')
     }
     else{
         const bussines = new Bussines(req.body)
         await bussines.save()
         res.send('Bussines register successfully\n'+bussines.toString())
     }

};