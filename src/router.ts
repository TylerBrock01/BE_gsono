import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World');
})
router.post('/auth/register', (req, res) => {
    console.log('register',req.body);
    res.send('register successful: '+ req.body);
})
export default router;