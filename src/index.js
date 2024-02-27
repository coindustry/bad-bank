import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './navbar';
import { Home } from './home';
import { CreateAccount } from './createaccount';
import { Login } from './login';
import { Deposit } from './deposit';
import { Withdraw } from './withdraw';
import { AllData } from './alldata';
import { Balance } from './balance';
import { UserProvider } from './usercontext'; // Import UserProvider from usercontext.js

function Spa() {
  const defaultUser = { users: [] }; // Initialize an empty array for users
  return (
    <Router>
      <NavBar />
      <UserProvider value={defaultUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/alldata/" element={<AllData />} />
          <Route path="/balance/" element={<Balance />} />
          <Route path="/usercontext/" element={<Balance />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

ReactDOM.render(<Spa />, document.getElementById('root'));
