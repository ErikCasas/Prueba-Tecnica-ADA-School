import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CardTicket from '../../Components/CardTicket/CardTicket';
import CardUser from '../../Components/CardUser/CardUser';

const DetailUser = () => {
  const user = useSelector((state) => state.user);
  const data = user?.user;
  const uniqueTickets = data?.tickets?.reduce((acc, ticket) => {
    const existingTicket = acc.find((t) => t.id === ticket._id);
    if (existingTicket) {
      existingTicket.count += 1;
    } else {
      acc.push({
        id: ticket._id,
        name: ticket.name,
        destiny: ticket.destiny,
        origin: ticket.origin,
        quantityAvailable: ticket.quantityAvailable,
        date: ticket.date,
        count: 1,
      });
    }

    return acc;
  }, []);

  return (
    <>
      <ContainerUser>
        <CardUser
          name={data?.name}
          role={data?.role}
          phone={data?.phone}
          email={data?.email}
        />
      </ContainerUser>
      <ContainerCards>
        {uniqueTickets?.map((el) => (
          <CardTicket
          key={el.id}
          name={el.name}
          detinity={el.destiny}
          origin={el.origin}
          available={el.quantityAvailable}
          id={el.id}
          date={el.date}
          quantity={el.count}
          render={false}
          />
        ))}
      </ContainerCards>
    </>
  );
};

const ContainerUser = styled.div`
  display: flex;
  padding: 50px;
  align-items: center;
  justify-content: center;
  background-color: #0193cc;
`;

const ContainerCards = styled.div`
  background-color: #0193cc;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  min-height: 100vh;
  grid-gap: 20px;
  justify-content: center;
  padding: 40px 50px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export default DetailUser;
