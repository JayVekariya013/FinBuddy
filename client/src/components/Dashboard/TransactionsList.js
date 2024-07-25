import React from 'react';

const TransactionsList = () => {
  // Fetch transactions data from API
  const transactions = [
    { id: 1, type: 'income', category: 'Salary', amount: 5000, date: '2024-07-01' },
    { id: 2, type: 'expense', category: 'Groceries', amount: 150, date: '2024-07-02' },
  ]; // Placeholder

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="mb-2">
            <span>{transaction.date}</span> - <span>{transaction.category}</span> - 
            <span className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>
              ${transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
