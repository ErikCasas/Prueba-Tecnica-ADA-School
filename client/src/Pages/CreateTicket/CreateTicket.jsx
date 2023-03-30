import React from 'react';
import styled from 'styled-components';
import FormCreateTicket from '../../Components/FormCreateTicket/FormCreateTicket';

const CreateTicket = () => {
  return (
    <>
      <Container>
        <FormCreateTicket />
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

export default CreateTicket;
