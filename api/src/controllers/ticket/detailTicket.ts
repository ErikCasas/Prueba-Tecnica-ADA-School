import Ticket from "../../models/ticketModel";
import { Request, Response } from 'express';


const detailTicket =async (req:Request, res: Response) => {
    const { id } = req.params;
    try {
        const ticket = await Ticket.findById(id)
        if(ticket){
            return res.status(200).json(ticket)
        }
        return res.status(404).json('Non-existent ticket')

    } catch (error) {
        return res.status(500).json(error)
    }
}

export default detailTicket