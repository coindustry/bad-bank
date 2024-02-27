import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // Add currentUser state

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const setUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ users, addUser, currentUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;