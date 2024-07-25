import React from 'react';
import Balance from './Balance';
import TransactionsList from './TransactionsList';
import Charts from './Charts';

const Dashboard = () => {
  return (
    <div className="p-4">
      <Balance />
      <TransactionsList />
      <Charts />
    </div>
  );
};

export default Dashboard;
