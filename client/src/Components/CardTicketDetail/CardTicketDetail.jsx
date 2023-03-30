import React from 'react';
import styled from 'styled-components';

const CardTicketDetail = ({
  price,
  origin,
  date,
  hour,
  available,
  name,
  destiny,
}) => {
  return (
    <>
      <Container className="card " style={{ width: 420, height: 520 }}>
        <div className="card-body">
          <h4 className="card-title">Name: {name}</h4>
          <h5 className="card-subtitle mb-2 text-muted">
            available: {available}
          </h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <div className="card-body text-dark">
                <h5 className="card-title">price</h5>
                <h4 className="card-text">${' '}{price}</h4>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div className="card-body text-dark">
                <h5 className="card-title">Departure date</h5>
                <h4 className="card-text">{date}</h4>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div className="card-body text-dark">
                <h5 className="card-title">Departure time</h5>
                <h4 className="card-text">{hour}</h4>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <div className="card-body text-dark">
                <h5 className="card-text">
                  {origin}-----------→{destiny}
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: 10px solid #fcfcfc;
  border-radius: 10px;
  box-shadow: 15px 20px 10px;
`

export default CardTicketDetail;
