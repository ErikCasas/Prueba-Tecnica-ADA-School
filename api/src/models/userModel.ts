import { Model, Schema, model } from 'mongoose';
import { User } from '../types';

/* Creating a schema for the user model. */
const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  role: {
    type: String,
    require: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    require: true,
    trim: true,
  },
  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TicketModel',
    },
  ],
});

const User: Model<User> = model<User>('UserModel', userSchema);

export default User;
