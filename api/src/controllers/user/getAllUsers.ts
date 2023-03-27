import User from '../../models/userModel';
import { Request, Response } from 'express';
import decodedToken from '../../middleware/decoded';

const getAllUsers = async (req: Request, res: Response) => {
  const authorization = req.get('authorization');
  try {
    const infoDecoded = decodedToken(req, res, authorization);
    console.log( infoDecoded.role);

    if ( infoDecoded.role == 'Admin') {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } else {
      res.status(402).json('acces deneged');
    }
  } catch (error) {
    console.log('error :>> ', error);
    res.status(500).json(error);
  }
};

export default getAllUsers;
