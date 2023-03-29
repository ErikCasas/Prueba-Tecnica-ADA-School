import React from 'react';
import { useSelector } from 'react-redux';
import CardTicket from '../../Components/CardTicket/CardTicket';
import CardUser from '../../Components/CardUser/CardUser';

const DetailUser = () => {
  const { user } = useSelector((state) => state.user);
  const data = user?.user;
  // console.log(data);
    
    return (
      <>
      <CardUser
        name={data?.name}
        role={data?.role}
        phone={data?.phone}
        email={data?.email}
        />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
      >
        {data?.tickets?.map((el) => {
          return (
            <CardTicket
              key={Math.random()}
              name={el.name}
              detinity={el.destiny}
              origin={el.origin}
              available={el.quantityAvailable}
              id={el._id}
              date={el.date}
              render={false}
              />
              );
            })}
      </div>
    </>
  );
};

export default DetailUser;
