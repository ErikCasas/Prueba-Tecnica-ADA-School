import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardTicket from '../../Components/CardTicket/CardTicket';
import CardUser from '../../Components/CardUser/CardUser';

const DetailUser = () => {
  const { user } = useSelector((state) => state.user);
  const data = user?.user;
  console.log(data);
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
              key={el._id}
              name={el.name}
              detinity={el.destiny}
              origin={el.origin}
              available={el.quantityAvailable}
              id={el._id}
              date={el.date}
            />
          );
        })}
      </div>
    </>
  );
};

export default DetailUser;
