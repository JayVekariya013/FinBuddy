import React from 'react';

const Balance = () => {
  // Fetch balance data from API
  const balance = 1000; // Placeholder

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">Current Balance</h2>
      <p className="text-2xl">${balance.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
