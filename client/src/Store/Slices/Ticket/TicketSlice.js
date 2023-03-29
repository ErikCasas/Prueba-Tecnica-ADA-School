import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTickets: [],
  detailTicket: {},
};

export const TicketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    buyTicket: (state, action) => {
      state.detailTicket=action.payload;
    },

    allTickets: (state, action) => {
      state.allTickets = action.payload
    }
  },
});

export const { buyTicket, allTickets } = TicketSlice.actions;
export default TicketSlice.reducer;
