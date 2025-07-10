import {Router} from 'express'
import Bussines from "./models/Bussines";

const router = Router()

router.post('/auth/register', async (req, res) => {
    console.log('register:\n',req.body);
    const bussines = new Bussines(req.body);

    await bussines.save();
    res.send('register successfully\n'+bussines.toString());
})
export default router;