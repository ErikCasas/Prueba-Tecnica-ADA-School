import Ticket from '../../models/ticketModel';
import User from '../../models/userModel';
import { Request, Response } from 'express';
import decodedToken from '../../middleware/decoded';

const createTicket = async (req: Request, res: Response) => {
  const authorization = req.get('authorization');
  //   console.log("holaa");
  try {
    const infoDecoded = decodedToken(req, res, authorization);
    const user = await User.findById(infoDecoded.id);
    if (user?.role === 'Admin') {
      const newTicket = new Ticket(req.body);
      await newTicket.save();
      return res.status(201).json(newTicket);
    } else {
      return res.status(403).json('You dont have access to these features');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export default createTicket;
