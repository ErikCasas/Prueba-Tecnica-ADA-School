require('dotenv').config();
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { IUser } from '../types';

/**
 * If the token is valid, then the user is authorized to access the next route
 * @param {Request | any} req - Request | any,
 * @param {Response | any} res - Response | any
 * @param {NextFunction} next - NextFunction - This is a function that will be called to pass control
 * to the next middleware function.
 */
const validateToken = async (
  req: Request | any,
  res: Response | any,
  next: NextFunction
) => {
  
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const decoded = jwt.verify(
      token,
      process.env.JWT || 'default-secret'
      ) as IUser;

      // console.log(decoded);

    decoded.role === 'Client' || decoded.role === 'Admin'
      ? next()
      : res.status(401).json({ message: 'Access denied' });

    
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken