import Bussines from "../models/Bussines";
import { Request, Response } from "express";

 export const createBussiness = async (req:Request,res:Response) => {
    console.log('register:\n',req.body);
    const bussines = new Bussines(req.body);

    await bussines.save();
    res.send('register successfully\n'+bussines.toString());
};