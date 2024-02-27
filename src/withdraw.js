import React, { useState, useContext } from 'react';
import { Card } from './card';
import UserContext from './usercontext';

const Withdraw = () => {
  const { currentUser, setUser } = useContext(UserContext); // Access currentUser and setUser from UserContext
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (!isNaN(amount) && amount > 0) {
      if (currentUser && currentUser.balance !== undefined && currentUser.balance >= amount) {
        const updatedUser = { ...currentUser, balance: currentUser.balance - amount }; // Update currentUser with the new balance
        setUser(updatedUser);
        setStatus(`Successfully withdrew $${amount}`);
        setWithdrawAmount('');
      } else {
        setStatus('Insufficient balance');
      }
    } else {
      setStatus('Invalid withdrawal amount');
    }
  };

  return (
    <Card
      bgcolor="lightcoral" // Set color closer to red
      header="Withdraw"
      status={status}
      body={
        <>
          <p>Current Balance: ${currentUser ? currentUser.balance : 'N/A'}</p> {/* Display current balance */}
          <label htmlFor="withdrawAmount">Withdraw Amount:</label>
          <input
            type="number"
            id="withdrawAmount"
            className="form-control"
            placeholder="Enter amount"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <button
            className="btn btn-danger mt-2" // Use red color for the button
            onClick={handleWithdraw}
          >
            Withdraw
          </button>
        </>
      }
    />
  );
};

export { Withdraw };
