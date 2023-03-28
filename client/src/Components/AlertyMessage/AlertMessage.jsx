import React from 'react';

const AlertMessage = ({message}) => {
  return (
    <>
      <div className="alert alert-warning" role="alert">
        {message}
      </div>
      <div>AlertMessage</div>
    </>
  );
};

export default AlertMessage;
