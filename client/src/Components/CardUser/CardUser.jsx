import React from 'react';
import npc from '../../Images/npc.jpg';
import Client from '../../Images/Client.jpg'
const CardUser = ({ name, role, phone, email }) => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: '478px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={role==='Admin'?npc:Client} className="img-fluid rounded-start" alt="npc" />
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Name: {name}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
                <li
                  className="list-group-item"
                  style={
                    role === 'Admin'
                      ? { backgroundColor: 'red' }
                      : { backgroundColor: 'blue' }
                  }
                >
                  Role: {role}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUser;
