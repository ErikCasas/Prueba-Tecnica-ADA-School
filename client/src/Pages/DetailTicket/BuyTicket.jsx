import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardTicketDetail from '../../Components/CardTicketDetail/CardTicketDetail';
import { buyingTicket, getTicketDetail } from '../../Store/Slices/Ticket/Thunk';

const BuyTicket = () => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const { id } = useParams();

  const BuyTickets = () => {
    dispatch(
      buyingTicket({
        idTicket: detailTicket?._id,
        quantity: quantity,
      })
    );
  };

  useEffect(() => {
    dispatch(getTicketDetail(id));
  }, []);

  useEffect(() => {
    dispatch(getTicketDetail(id));
  }, [BuyTickets]);

  const { detailTicket } = useSelector((state) => state.ticket.detailTicket);

  const handlerSum = () => {
    setQuantity(quantity + 1);
  };

  const handlerSub = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="flex-column">
        <div>CardTicketDetail {id}</div>;
        <div className="d-flex">
          <div>
            <CardTicketDetail
              price={detailTicket?.price}
              origin={detailTicket?.origin}
              date={detailTicket?.departureTime}
              hour={detailTicket?.date}
              available={detailTicket?.quantityAvailable}
              name={detailTicket?.name}
              destiny={detailTicket?.destiny}
            />
          </div>
          <div className="w-100 align-self-center justify-content-center">
            <ul className="list-group list-group-flush">
              <div className="d-flex w-100 align-self-center justify-content-center">
                <li
                  className="list-group-item d-flex justify-content-between"
                  style={{ margin: '0 20px 0 0' }}
                >
                  <h2
                    className="justify-content-around "
                    style={{ margin: '0 10px 0 0' }}
                  >
                    Quantity to buy{' '}
                  </h2>
                  <h2> {quantity}</h2>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <h2
                    className="justify-content-around "
                    style={{ margin: '0 10px 0 0' }}
                  >
                    Total{' '}
                  </h2>
                  <h2> {quantity * detailTicket?.price}</h2>
                </li>
              </div>
            </ul>

            {/* <div
              class="d-flex align-self-center justify-content-center btn-group-lg"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-primary"
                disabled={quantity <= 0}
                onClick={handlerSub}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-info"
                disabled={quantity >= detailTicket?.quantityAvailable}
                onClick={handlerSum}
              >
                +
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={BuyTickets}
                disabled={quantity >= detailTicket?.quantityAvailable||quantity <= 0}
              >
                Buy$
              </button>
            </div> */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <button
                disabled={quantity >= detailTicket?.quantityAvailable}
                onClick={handlerSum}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  height: '48px',
                  width: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#f2f2f2',
                  border: '1px solid #ccc',
                  marginRight: '8px',
                }}
              >
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  +
                </span>
              </button>
              <button
                disabled={quantity <= 0}
                onClick={handlerSub}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  height: '48px',
                  width: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#f2f2f2',
                  border: '1px solid #ccc',
                }}
              >
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  -
                </span>
              </button>
              <button
                onClick={BuyTickets}
                disabled={
                  quantity >= detailTicket?.quantityAvailable || quantity <= 0
                }
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  height: '48px',
                  padding: '0 24px',
                  borderRadius: '4px',
                  backgroundColor: '#f44336',
                  color: '#fff',
                  border: 'none',
                  marginLeft: '8px',
                }}
              >
                Buy Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyTicket;
