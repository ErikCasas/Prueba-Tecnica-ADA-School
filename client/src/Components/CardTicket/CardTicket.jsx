import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import airplane from '../../svg/airplane.svg';

const CardTicket = ({
  name,
  detinity,
  origin,
  available,
  id,
  date,
  render,
  quantity
}) => {
  console.log(detinity);
  return (
    <>
      <Container className="card ticket-card">
        <div className="card-body">
          <h5 className="card-title ticket-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted ticket-destination d-flex">
            available 
            <TextInfo> 
              {available}
              </TextInfo>
          </h6>
          <div className="card-text ticket-name d-flex m-0">
            from 
            <TextInfo>
            {origin}
            </TextInfo>
             to 
            <TextInfo>
             {detinity}
            </TextInfo>

          </div>
          <div className="card-text ticket-date d-flex m-0">Departure Date: 
          <TextInfo>
          {date}
          </TextInfo>
          </div>
          {render ? (
            <ConatinerButton>
            <Link to={`ticket/${id}`}>
              <button type="button" className="btn btn-primary m5">
                Get
                <img src={airplane} alt="airplane" width={30} />
              </button>
            </Link>
            </ConatinerButton>
          ) : 
          <ConatinerButton>

            <h1>{quantity}</h1>
          </ConatinerButton>   
           }
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
height: 220px;
  border: dashed red 5px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px;
`;

const TextInfo = styled.div`
  font-weight: bold;
  margin-left: 8px;
  margin-right: 8px;
`;

const ConatinerButton = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 30px;
`
export default CardTicket;
