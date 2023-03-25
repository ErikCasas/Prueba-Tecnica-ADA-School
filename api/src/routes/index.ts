import { Router } from 'express';
import ticketRoutes from './ticketRoutes/ticket.routes'
import userRoutes from './userRoutes/user.routes'
const router = Router();

//ruta inicial de prueba
router.get('/',async (_req , res) => {
    try {
        console.log('UP!');
        res.json("the server it's alive!!")
    } catch (error) {
        console.log('error :>> ', error);
    }
})


export default router;
