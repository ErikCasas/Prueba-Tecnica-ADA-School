require('dotenv').config();
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const validateToken = (req: Request |any , res: Response | any, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }
  
      const decoded = jwt.verify(token, process.env.JWT || 'default-secret') as { id: string };
      req.userId = decoded.id;
  
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  };