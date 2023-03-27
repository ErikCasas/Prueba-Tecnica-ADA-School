import { Router } from 'express';
import ticketRoutes from './ticketRoutes/ticket.routes'
import userRoutes from './userRoutes/user.routes'
const router = Router();

/* It's a route to test if the server is up. */
router.get('/',async (_req , res) => {
    try {
        console.log('UP!');
        res.json("the server it's alive!!")
    } catch (error) {
        console.log('error :>> ', error);
    }
})

/* It's importing the routes from the other files. */
router.use(ticketRoutes)
router.use(userRoutes)


export default router;
