import React from 'react';
import { Link } from 'react-router-dom';

const CardTicket = ({ name, detinity, origin, available, id, date }) => {
  return (
    <>
      <div className="card ticket-card">
        <div className="card-body">
          <h5 className="card-title ticket-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted ticket-destination">
            available {available}
          </h6>
          <p className="card-text ticket-name">
            from {origin} to {detinity}
          </p>
          <p className="card-text ticket-date">Departure Date: {date}</p>
          <Link to={`ticket/${id}`}>
            <button type="button" className="btn btn-primary m5">
              Get
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardTicket;
