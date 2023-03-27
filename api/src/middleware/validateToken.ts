require('dotenv').config();
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
// import User from '../models/userModel';
import { IUser } from '../types';

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