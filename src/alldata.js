import React from 'react';
import { Card } from './card';
import UserContext from './usercontext';


function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <h1>All Data <br/>
      {JSON.stringify(ctx)}
    </h1> 
  );
}

export { AllData };