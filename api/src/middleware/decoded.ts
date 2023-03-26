import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../types';

const decodedToken = (req: Request, res: Response, authorization: string) => {
  let token: any = '';
  if (authorization && authorization.toLocaleLowerCase().startsWith('bearer ')) {
    token = req.headers.authorization?.split(' ')[1];
  }
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
  }
  const decoded = jwt.verify(
    token,
    process.env.JWT || 'default-secret'
  ) as IUser;
  if (!decoded.id) {
    res.status(401).json('token missing or invalid');
  }

  return decoded
};

export default decodedToken;
