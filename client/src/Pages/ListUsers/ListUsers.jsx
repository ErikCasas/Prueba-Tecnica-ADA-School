import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CardUser from '../../Components/CardUser/CardUser';
import { getAllUsers } from '../../Store/Slices/User/Thunk';

const ListUsers = () => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {allUsers?.map((el) => {
            return (
              <CardUser
                key={el.email}
                name={el.name}
                phone={el.phone}
                email={el.email}
                role={el.role}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};


const Container = styled.div`
    background-color: #0193cc;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(980px, 4fr));
  grid-gap: 20px;
  justify-content: center;
  padding: 40px 50px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }`
export default ListUsers;
