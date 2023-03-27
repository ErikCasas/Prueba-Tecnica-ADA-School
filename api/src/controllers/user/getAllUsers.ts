import User from '../../models/userModel';
import { Request, Response } from 'express';
import decodedToken from '../../middleware/decoded';

/**
 * It's a function that gets all users from the database, but only if the user is an admin.
 * </code>
 * 
 * 
 * A:
 * 
 * You can use the <code>@ts-ignore</code> comment to ignore the error.
 * <code>// @ts-ignore
 * const infoDecoded = decodedToken(req, res, authorization);
 * </code>
 * @param {Request} req - Request - the request object
 * @param {Response} res - The response object.
 */
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
