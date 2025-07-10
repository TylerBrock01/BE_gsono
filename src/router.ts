import {Router} from 'express'
import Bussines from "./models/Bussines";

const router = Router()

router.post('/auth/register', async (req, res) => {
    console.log('register:\n',req.body);
    await Bussines.create(req.body)
    res.send('register successful: '+ req.body);
})
export default router;