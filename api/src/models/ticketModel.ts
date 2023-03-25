import { Model, Schema, model } from 'mongoose';
import { ITicket } from '../types';

const ticketSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
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
    TtravelTime: {
      type: Date,
      require: true,
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
