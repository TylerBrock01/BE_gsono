import express from 'express'; //esm
import 'dotenv/config'
import router from "./router";
import {connectDB} from "./config/db";

connectDB();
const app = express();

app.use(express.json());//read data
app.use('/',router);

export default app