import React from 'react';

/**
 * It takes a message as a prop and returns a div with the message inside
 * @returns A React component that displays a message.
 */
const AlertMessage = ({ message }) => {
  return (
    <>
      <div className="alert alert-warning" role="alert">
        {message}
      </div>
    </>
  );
};

export default AlertMessage;
