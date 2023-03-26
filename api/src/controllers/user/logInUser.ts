require('dotenv').config();
import User from '../../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const LogIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email }).populate('tickets');

    const accessGranted =
      user!==null && (await bcrypt.compare(password, user.passwordHash));
    if (!accessGranted) {
      res.status(401).json({ error: 'Invalid email or password' });
    }

    const userToken = {
      id: user?._id,
      name: user?.name,
      email: user?.email,
      tickets: user?.tickets,
      role: user?.role,
    };

    const token = jwt.sign(userToken, process.env.JWT || 'default-secret');

    res.status(200).json({
      userToken,
      token,
    });
  } catch (error) {
    res.status(400).json({ 'error :>> ': error });
  };
};

export default LogIn;
