import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../types';

/**
 * It takes a request, a response, and an authorization header, and returns a decoded token
 * @param {Request} req - Request - the request object
 * @param {Response} res - Response - the response object
 * @param {string | undefined} authorization - string | undefined
 * @returns The decoded token.
 */
const decodedToken = (req: Request, res: Response, authorization: string | undefined) => {
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
  ) as User;
  if (!decoded.id) {
    res.status(401).json('token missing or invalid');
  }

  return decoded
};

export default decodedToken;
