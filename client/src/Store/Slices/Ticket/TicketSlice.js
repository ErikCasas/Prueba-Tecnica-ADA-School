import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTickets: [],
  detailTicket: {},
  createTicket: {},
  ticket: {},
};

export const TicketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    buyTicket: (state, action) => {
      state.detailTicket=action.payload;
    },
    createTicket: (state, action) => {
      state.createTicket;
    },
    allTickets: (state, action) => {
      console.log('action.pau :>> ', action.payload);
      state.allTickets = action.payload
    }
  },
});

export const { buyTicket, createTicket, allTickets } = TicketSlice.actions;
export default TicketSlice.reducer;
