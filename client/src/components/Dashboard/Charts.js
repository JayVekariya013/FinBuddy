import React from 'react';
import { Line } from 'react-chartjs-2';

const Charts = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expenses',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'red',
      },
      {
        label: 'Income',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: 'green',
      },
    ],
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">Spending Analysis</h2>
      <Line data={data} />
    </div>
  );
};

export default Charts;
