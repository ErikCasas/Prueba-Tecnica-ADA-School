require('dotenv').config();
import User from '../../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';


const LogIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' }); // Agregamos un return para salir de la función después de enviar la respuesta HTTP
    }

    const user = await User.findOne({ email })//.populate('ticketmodels');

    const accessGranted =
      user!==null && (await bcrypt.compare(password, user.passwordHash));
    if (!accessGranted) {
      return res.status(401).json({ error: 'Invalid email or password' }); // Agregamos un return para salir de la función después de enviar la respuesta HTTP
    }

    const userToken = {
      id: user?._id,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      role: user?.role,
      tickets: user?.tickets,
    };

    const token = jwt.sign(userToken, process.env.JWT || 'default-secret');

    return res.status(200).json({
      userToken,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ 'error :>> ': error });
  };
};

export default LogIn;
