import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from '../../api/axiosConfig';
import CardTicket from '../../Components/CardTicket/CardTicket';
import { getAllTickets } from '../../Store/Slices/Ticket/Thunk';
import styled from 'styled-components';

const Home = () => {
  const dispatch = useDispatch();

  const [numberOfTickets, setnumberOfTickets] = useState(12);

  const token = localStorage.getItem('token');

  const allTickets = useSelector((state) => state.ticket.allTickets.tickets);

  const Tickets = allTickets?.slice(0, numberOfTickets);

  const moreTickets = () => {
    setnumberOfTickets(numberOfTickets + 4);
  };

  useEffect(() => {
    setAuthToken(); // actualiza el token en los encabezados de la solicitud
    dispatch(getAllTickets());
  }, [dispatch, token]);

  return (
    <>
      <Container>
        {Tickets?.map((el) => (
          <CardTicket
            et
            key={el._id}
            id={el._id}
            detinity={el.destiny}
            origin={el.origin}
            date={el.date}
            available={el.quantityAvailable}
            name={el.name}
            render={true}
          />
        ))}
      </Container>
      <ContainerButton>
        <button type="button" className="btn btn-success btn-lg" onClick={moreTickets}>
          {numberOfTickets <= allTickets?.length
            ? 'load more'
            : 'No more (⩾﹏⩽)'}
        </button>
      </ContainerButton>
    </>
  );
};

const Container = styled.div`
  background-color: #0193cc;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  padding: 40px 50px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const ContainerButton = styled.div`
  background-color: #0193cc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export default Home;
