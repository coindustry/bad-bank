import React from 'react';
import { Card } from './card';
import TestComponent from './test'; // Import TestComponent

function Home() {
  return (
    <div>
      <Card
        bgcolor="primary" // Example bgcolor
        header="BadBank Banking App" // Example header
        status="Welcome to the bank" // Assuming this should be the status
        body={<img src="/bank.png" className="img-fluid" alt="Responsive image" />}
      />
      <TestComponent /> {/* Include TestComponent here */}
    </div>
  );
}

export { Home };


