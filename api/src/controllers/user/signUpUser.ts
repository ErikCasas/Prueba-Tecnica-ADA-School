import User from '../../models/userModel';
import {Role} from '../../types'
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

const SignUp = async (req: Request, res: Response) => {
  const { name, email, phone, password } = req.body;
  console.log(req.body,"aasd");
  
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
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json(error)
  }
};

export default SignUp;
