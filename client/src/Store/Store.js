import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Slices/User/UserSlice';
import TicketSlice from './Slices/Ticket/TicketSlice';

const store = configureStore({
  reducer: {
    user: UserSlice,
    ticket: TicketSlice,
  },
});

export default store;
