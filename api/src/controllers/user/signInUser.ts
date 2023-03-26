require('dotenv').config();
import User from '../../models/userModel';
import {Role} from '../../types'
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

const signIn = async (req: Request, res: Response) => {
  const { name, email, phone, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      res.status(409).json('this user already exists');
    };
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
        email,
        name,
        phone,
        passwordHash,
        role: 'Client' as Role
    });
    newUser.save();
    res.status(201).json(newUser);
  } catch (error) {}
};

export default signIn;
