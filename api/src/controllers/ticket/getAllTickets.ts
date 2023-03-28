import Ticket from '../../models/ticketModel';
import { Request, Response } from 'express';

const getAllTickets = async (_req: Request, res: Response) => {
    console.log("sfa");
    
  try {
    const tickets = await Ticket.find().exec();
    if (tickets && tickets.length > 0) {
      return res.status(200).json(tickets);
    } else {
      return res.status(404).json({ message: 'There are no tickets in database' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default getAllTickets;
