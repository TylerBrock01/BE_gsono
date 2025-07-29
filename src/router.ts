import {Router} from 'express'
import {createBussiness} from "./handlers/CreateBussines";
import {selectBussines} from "./handlers/SelectBussines";

const router = Router()

router.post('/auth/registerbussines', createBussiness)
router.get('/showbussines', selectBussines)



export default router;