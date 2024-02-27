import React, { useState, useContext } from 'react';
import { Card } from './card';
import { UserContext } from './usercontext'; // Import UserContext

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const { users, setUser } = useContext(UserContext); // Destructure setUser from UserContext

  function validate() {
    if (!email || !password) {
      setStatus('Error: Please enter email and password');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    // Check if the user exists and credentials match
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setStatus('Logged in successfully!');
      setUser(user); // Set the user context value
    } else {
      setStatus('Error: Invalid email or password');
    }
  }

  return (
    <Card
      bgcolor="orange" // Set card color to orange
      header="Login"
      status={status}
      body={
        <>
          Email address<br />
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          /><br />
          Password<br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          /><br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleSubmit}
          >
            Login
          </button>
        </>
      }
    />
  );
}

export { Login };
