import { Model, Schema, model } from 'mongoose';
import { ITicket } from '../types';

/* Creating a schema for the ticket model. */
const ticketSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      unique: true
    },
    origin: {
      type: String,
      require: true,
      trim: true,
    },
    destiny: {
      type: String,
      require: true,
      trim: true,
    },
    date: {
      type: Date,
      require: true,
    },
    numberOfPassengers: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    departureTime: {
      type: Date,
      require: true,
    },
    quantity:{
      type: Number,
    },
    quantityAvailable:{
      type: Number,
      require: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'UserModel',
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Ticket: Model<ITicket> = model<ITicket>('TicketModel', ticketSchema);

export default Ticket;
