import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World');
})
router.get('/login', (req, res) => {
    console.log('login');
    res.send('Hello World');
})
export default router;