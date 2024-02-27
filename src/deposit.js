import React, { useState, useContext } from 'react';
import { Card } from './card';
import UserContext from './usercontext';

const Deposit = () => {
  const { currentUser, setUser } = useContext(UserContext); // Access currentUser and setUser from UserContext
  const [depositAmount, setDepositAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (!isNaN(amount) && amount > 0) {
      if (currentUser && currentUser.balance !== undefined) {
        const updatedUser = { ...currentUser, balance: currentUser.balance + amount }; // Update currentUser with the new balance
        setUser(updatedUser);
        setStatus(`Successfully deposited $${amount}`);
        setDepositAmount('');
      } else {
        setStatus('User or balance is undefined');
      }
    } else {
      setStatus('Invalid deposit amount');
    }
  };

  return (
    <Card
      bgcolor="lightblue"
      header="Deposit"
      status={status}
      body={
        <>
          <p>Current Balance: ${currentUser ? currentUser.balance : 'N/A'}</p> {/* Display current balance */}
          <label htmlFor="depositAmount">Deposit Amount:</label>
          <input
            type="number"
            id="depositAmount"
            className="form-control"
            placeholder="Enter amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <button
            className="btn btn-primary mt-2"
            onClick={handleDeposit}
          >
            Deposit
          </button>
        </>
      }
    />
  );
};

export { Deposit };

