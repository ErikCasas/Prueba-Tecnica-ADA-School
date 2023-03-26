import { Router } from "express";
import LogIn from "../../controllers/user/logInUser";
import { validateToken } from "../../middleware/validateToken";

const router = Router()

router.post('/'/*logIn*/, LogIn);
router.put('/'/*edit*/, validateToken );
router.post('/create');
router.get('/getAll', validateToken);
router.get('/user/', validateToken);

export default router