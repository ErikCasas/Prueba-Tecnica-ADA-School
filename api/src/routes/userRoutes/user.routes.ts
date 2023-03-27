import { Router } from 'express';
import editUser from '../../controllers/user/editUser';
import getAllUsers from '../../controllers/user/getAllUsers';
import LogIn from '../../controllers/user/logInUser';
import SignUp from '../../controllers/user/signUpUser';
import validateToken from '../../middleware/validateToken';

/* Creating a router object and then adding routes to it. */
const router = Router();

/* Creating a route for the user to sign up and log in. */
router.post('/LogIn', LogIn);
router.post('/SignUp', SignUp);

/* Creating a route for the user to edit their profile. */
router.put('/Edit', validateToken, editUser);

/* Creating a route for the user to get all the users. */
router.get('/GetAll', validateToken, getAllUsers);

export default router;
