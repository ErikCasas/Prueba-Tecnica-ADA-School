import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTickets } from '../../Store/Slices/Ticket/Thunk';

const Home = () => {
  // const {allTickets} = useSelector(this.state.ticket)

  const dispatch = useDispatch();    
  useEffect(() => {
    console.log("popo");
    dispatch(getAllTickets());
  }, []);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
