import { Router } from 'express';
import editUser from '../../controllers/user/editUser';
import LogIn from '../../controllers/user/logInUser';
import SignUp from '../../controllers/user/signUpUser';
import { validateToken } from '../../middleware/validateToken';

const router = Router();

router.post('/LogIn', LogIn);
router.post('/SignUp', SignUp);

router.put('/Edit', validateToken, editUser);
router.get('/GetAll', validateToken);
router.get('/User', validateToken);

export default router;
