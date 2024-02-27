import React from 'react';

function Card({ bgcolor, header, status, body }) {
  return (
    <div className="card" style={{ backgroundColor: bgcolor, padding: '20px', margin: '20px', borderRadius: '10px' }}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{body}</div>
      {status && <div className="card-footer">{status}</div>}
    </div>
  );
}

export { Card };
