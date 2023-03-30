import React from 'react';
import FormLogIn from '../../Components/FormLogIn/FormLogIn';
import styled from 'styled-components';

const LogIn = () => {
  return (
    <>
      <Container>
        <FormLogIn />
      </Container>
    </>
  );
};
const Container = styled.div`
  height: 81.6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #23d5e2;
`;
export default LogIn;
