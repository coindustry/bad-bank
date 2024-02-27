import React, { useContext } from 'react';
import { Card } from './card';
import { UserContext } from './usercontext';

function Balance() {
  const { currentUser } = useContext(UserContext); // Access currentUser from UserContext

  // Check if currentUser is defined before accessing its properties
  const userName = currentUser ? currentUser.name : 'Unknown';
  const balanceAmount = currentUser ? currentUser.balance : 'N/A';

  return (
    <Card
      bgcolor="lightgreen"
      header="Balance"
      body={
        <>
          <p>Welcome, {userName}!</p>
          <p>Your current balance is: ${balanceAmount}</p>
        </>
      }
    />
  );
}

export { Balance };


