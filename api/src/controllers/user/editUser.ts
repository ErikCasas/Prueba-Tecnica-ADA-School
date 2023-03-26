import User from '../../models/userModel';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const editUser = async (req: Request, res: Response) => {
  let { password,email } = req.body;
  try {
    password = password && (await bcrypt.hash(password, 10));
    console.log(password);
    const user = await User.findOneAndUpdate(email,req.body);
    user
    ?res.status(200).json({'the user has benn update': user})
    :res.status(401).json('user not found') 
  } catch (error) {
    res.status(500).json(error);
  }
};

export default editUser;
