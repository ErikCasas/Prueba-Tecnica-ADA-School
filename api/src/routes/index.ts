import { Router } from 'express';

const router = Router();

router.get('/',async (_req , res) => {
    try {
        console.log('UP!');
        res.json("the server it's alive!!")
    } catch (error) {
        console.log('error :>> ', error);
    }
})


export default router;
