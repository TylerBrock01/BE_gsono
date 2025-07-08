import express from 'express'; //esm
import router from "./router";
const app = express();

app.use(express.json());//read data
app.use('/',router);

export default app