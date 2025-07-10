import {Router} from 'express'
import {createBussiness} from "./handlers";

const router = Router()

router.post('/auth/registerbussines', createBussiness)


export default router;