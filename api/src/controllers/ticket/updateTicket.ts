import TicketModel from '../../models/ticketModel';
import { Request, Response } from 'express';
import decodedToken from '../../middleware/decoded';
import UserModel from '../../models/userModel';

const updateTicket = async (req: Request, res: Response) => {
  try {
    const authorization = req.get('authorization');
    const infoDecoded = decodedToken(req, res, authorization);
    const { quantity, idTicket } = req.body;

    const user = await UserModel.findById(infoDecoded.id);
    const ticket = await TicketModel.findById(idTicket);

    if (!ticket || ticket.quantityAvailable <= 0) {
      return res.status(404).json('Ticket is unavailable');
    }

    if (ticket.quantityAvailable < quantity) {
      return res.status(400).json('Quantity is not available');
    }

    ticket.quantityAvailable -= quantity;

    for (let i = 0; i < quantity ; i++) {
      await user?.tickets.push(ticket);
    }

    await Promise.all([user?.save(), ticket.save()]);

    return res.status(200).json({ ticket });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default updateTicket;

