import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from '../../api/axiosConfig';
import CardTicket from '../../Components/CardTicket/CardTicket';
import { getAllTickets } from '../../Store/Slices/Ticket/Thunk';

const Home = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    setAuthToken(); // actualiza el token en los encabezados de la solicitud
    dispatch(getAllTickets());
  }, [dispatch, token]);

  const allTickets = useSelector((state) => state.ticket.allTickets.tickets);
  console.log({allTickets});

  return (
    <>
      <h1>Home</h1>
      {allTickets?.map((el) => (
        <CardTicket
          key={el._id}
          id={el._id}
          detinity={el.destiny}
          origin={el.origin}
          available={el.quantityAvailable}
        />
      ))}
    </>
  );
};

export default Home;