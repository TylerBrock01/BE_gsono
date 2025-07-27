import express from 'express'; //esm
import cors from 'cors';
import 'dotenv/config'
import router from "./router";
import {connectDB} from "./config/db";
import {corsconfig} from "./config/cors";
const app = express();

connectDB();
app.use(cors(corsconfig));
app.use(express.json());//read data
app.use('/',router);

export default app