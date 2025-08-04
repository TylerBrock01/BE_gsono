import {Router} from 'express'
import {createBussiness} from "./handlers/CreateBussines";
import {selectBussines} from "./handlers/SelectBussines";
import {showchainBussines} from "./handlers/ShowChainBussines";

const router = Router()

router.post('/auth/registerbussines', createBussiness)
router.get('/selectbussines', selectBussines)
router.get('/showchainbussines', showchainBussines)



export default router;