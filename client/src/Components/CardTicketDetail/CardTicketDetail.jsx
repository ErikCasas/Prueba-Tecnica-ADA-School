import React from 'react';

const CardTicketDetail = ({price, origin, date, hour,available, name, destiny}) => {
  return (
    <>
      <div className="card m-3 " style={{ width: 350, height: 300 }}>
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">available: {available}</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <p>price</p>
              <p>{price}</p>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <p>Departure date</p>
              <p>{date}</p>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <p>Departure time</p>
              <p>{hour}</p>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <p>{origin}</p><p>←-----→
</p>
              <p>{destiny}</p>
            </li>
          </ul>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default CardTicketDetail;
