import React from 'react';

const CardUser = ({ name, role, phone, email }) => {
  return (
    <>
      <div className="card" style={{ width: '380px' }}>
        <div className="card-header">Name: {name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
          <li className="list-group-item">Role: {role}</li>
        </ul>
      </div>
    </>
  );
};

export default CardUser;
