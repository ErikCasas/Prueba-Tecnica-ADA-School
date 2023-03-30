import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CardTicketDetail from '../../Components/CardTicketDetail/CardTicketDetail';
import { buyingTicket, getTicketDetail } from '../../Store/Slices/Ticket/Thunk';
import { updateUser } from '../../Store/Slices/User/Thunk';
import add from '../../svg/add.svg';
import subtraction from '../../svg/subtraction.svg';
import buy from '../../svg/buy.svg';
const BuyTicket = () => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const history = useHistory();

  const { id } = useParams();

  const { detailTicket } = useSelector((state) => state.ticket.detailTicket);

  useEffect(() => {
    dispatch(getTicketDetail(id));
  }, []);

  const BuyTickets = () => {
    dispatch(
      buyingTicket({
        idTicket: detailTicket?._id,
        quantity: quantity,
      })
    );
    setTimeout(() => {
      dispatch(updateUser());
      history.push('/home');
    }, 700);
  };

  const handlerSum = () => {
    setQuantity(quantity + 1);
  };

  const handlerSub = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <Container className="d-flex">
        <ContainerTicket>
          <CardTicketDetail
            price={detailTicket?.price}
            origin={detailTicket?.origin}
            date={detailTicket?.departureTime}
            hour={detailTicket?.date}
            available={detailTicket?.quantityAvailable}
            name={detailTicket?.name}
            destiny={detailTicket?.destiny}
          />
        </ContainerTicket>
        <ConatinerOpcions>
          <div>

            <h1>{quantity}{' '}X{' '}{detailTicket?.price}{' '}={' '}${' '}{quantity*detailTicket?.price}</h1>
          </div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-primary"
              disabled={quantity > detailTicket?.quantityAvailable}
              onClick={handlerSum}
            >
              <img src={add} alt="sum" width={40} />
            </button>

            <button
              type="button"
              className="btn btn-primary btn-lg"
              disabled={quantity <= 0}
              onClick={handlerSub}
            >
              <img src={subtraction} alt="sub" width={40} />
            </button>
          </div>
          <button
            type="button"
            className="btn btn-success btn-lg"
            disabled={
              quantity > detailTicket?.quantityAvailable || quantity <= 0
            }
            onClick={BuyTickets}
            id="liveToastBtn"
          >
            <img src={buy} alt="buy" width={40} />{' '}
            {quantity === 1 || quantity === 0 ? 'Buy Ticket' : 'Buy Tickets'}
          </button>
        </ConatinerOpcions>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #0193cc;
  height: 81vh;
  flex-direction: row;
`;

const ConatinerOpcions = styled.div`
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 100%;
`;

const ContainerTicket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export default BuyTicket;
