require('dotenv').config();
import User from '../../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

/**
 * If the email and password are not provided, return a 400 response with an error message. If the
 * email and password are provided, try to find a user with the provided email. If the user is not
 * found, return a 401 response with an error message. If the user is found, compare the provided
 * password with the user's password hash. If the password is incorrect, return a 401 response with an
 * error message. If the password is correct, create a user token and a JWT token. Return a 200
 * response with the user token and the JWT token
 * @param {Request} req - Request - The request object.
 * @param {Response} res - Response: The response object that will be sent back to the client.
 * @returns the response object.
 */
const LogIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log("asdas");
  
  
  try {
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' }); // Agregamos un return para salir de la función después de enviar la respuesta HTTP
    }

    const user = await User.findOne({ email }).populate('tickets');

    const accessGranted =
      user !== null && (await bcrypt.compare(password, user.passwordHash));
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
    // The created user and his token are returned, but only the token is necessary,
    // only the user is left to demonstrate and have greater visibility of the information
    return res.status(200).json({
      userToken,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ 'error :>> ': error });
  }
};

export default LogIn;
