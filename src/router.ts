import {Router} from 'express'
import {createBussiness} from "./handlers";
import {showBussines} from "./handlers/ShowBussines";

const router = Router()

router.post('/auth/registerbussines', createBussiness)
router.get('/showbussines', showBussines)



export default router;