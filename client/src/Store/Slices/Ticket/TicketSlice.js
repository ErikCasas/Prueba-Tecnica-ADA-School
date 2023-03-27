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
      state.ticket;
    },
    createTicket: (state, action) => {
      state.createTicket;
    },
  },
});

export const { buyTicket, createTicket } = TicketSlice.actions