import React from 'react';
import FormSigUp from '../../Components/FormSignUp/FormSignUp';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <>
    <Container>
        <FormSigUp />
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




export default SignUp;
