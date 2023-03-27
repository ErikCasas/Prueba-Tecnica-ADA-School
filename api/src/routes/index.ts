import { Router } from 'express';
import validateToken from '../middleware/validateToken';
import ticketRoutes from './ticketRoutes/ticket.routes';
import userRoutes from './userRoutes/user.routes';
const router = Router();

/* It's a route to test if the server is up. */
router.get('/', async (_req, res) => {
  try {
    console.log('UP!');
    res.json("the server it's alive!!");
  } catch (error) {
    console.log('error :>> ', error);
  }
});

/* It's a middleware that validate the token and if it's valid it will continue to the next middleware. */
router.use('/tickets', validateToken, ticketRoutes);
/* It's importing the routes from the other files. */
router.use(userRoutes);

export default router;
