import User from '../../models/userModel';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import decodedToken from '../../middleware/decoded';

/**
 * It's a function that allows a user to edit their own profile, or an admin to edit any user's
 * profile.
 * @param {Request} req - Request - The request object.
 * @param {Response} res - Response: The response object.
 * @returns The user is being returned.
 */
const editUser = async (req: Request, res: Response) => {

  const authorization = req.get('authorization');
  let { password } = req.body;
  const option = {new:true};

  try {
    const infoDecoded = decodedToken(req, res, authorization);
    const email = {email: infoDecoded.email}

    password = password && (await bcrypt.hash(password, 10));
    const user = await User.findOneAndUpdate(email, req.body, option);
    if (user?.email === infoDecoded.email || infoDecoded.role === 'Admin') {
      return res.status(200).json({ 'the user has benn update': user });
    }
    return res.status(401).json('user not found');
  } catch (error) {
    console.log(error);
    
    return res.status(500).json(error);
  }
};

export default editUser;
