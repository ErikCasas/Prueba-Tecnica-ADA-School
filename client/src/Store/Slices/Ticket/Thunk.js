import { api } from '../../../api/axiosConfig';
import { allTickets, buyTicket } from './TicketSlice';

export const getAllTickets = () => {
  return async function (dispatch) {
    try {
      const { data } = await api.get('/tickets/allTickets');
      console.log('responsable :>> ', data);
      dispatch(allTickets({ tickets: data }));
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
};

export const createTicket = (data) => {
  return async function (dispatch) {
    try {
      const response = await api.post('/tickets', data);
      console.log({ response });
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
};

export const getTicketDetail = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await api.get(`tickets/${id}`);
      dispatch(buyTicket({ detailTicket: data }));
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
};

export const buyingTicket = (data) => {
    return async function(dispatch){
        const Buyet = await api.put('tickets',data)
        console.log({Buyet});
    }
};
