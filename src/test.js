import React, { useContext } from 'react';
import { UserContext } from './usercontext'; // Import UserContext

function TestComponent() {
  const { currentUser } = useContext(UserContext); // Access currentUser from UserContext

  return (
    <div>
      <h2>User Data</h2>
      <p>Name: {currentUser ? currentUser.name : 'Unknown'}</p>
      <p>Email: {currentUser ? currentUser.email : 'Unknown'}</p>
      <p>Password: {currentUser ? currentUser.password : 'Unknown'}</p>
      <p>Balance: {currentUser ? currentUser.balance : 'Unknown'}</p>
    </div>
  );
}

export default TestComponent;

