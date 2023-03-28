import { Router } from 'express';
import createTicket from '../../controllers/ticket/createTicket';
import detailTicket from '../../controllers/ticket/detailTicket';
import getAllTickets from '../../controllers/ticket/getAllTickets';
import updateTicket from '../../controllers/ticket/updateTicket';

const router = Router();

/**The same path is used for all routes since they will not interfere with
 * each other since they are different HTTP requests */
router.get('/allTickets', getAllTickets)
router.get('/:id', detailTicket);
router.put('/', updateTicket);
router.post('/', createTicket);

export default router;
