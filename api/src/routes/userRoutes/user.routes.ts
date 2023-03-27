import { Router } from 'express';
import editUser from '../../controllers/user/editUser';
import getAllUsers from '../../controllers/user/getAllUsers';
import LogIn from '../../controllers/user/logInUser';
import SignUp from '../../controllers/user/signUpUser';
import validateToken from '../../middleware/validateToken';

const router = Router();

router.post('/LogIn', LogIn);
router.post('/SignUp', SignUp);

router.put('/Edit', validateToken, editUser);
router.get('/GetAll', validateToken, getAllUsers);
router.get('/User', validateToken);

export default router;
