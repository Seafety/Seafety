// src/ui/Components/charts/PHLevelsChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PHLevelsChart = () => {
  const data = {
    labels: [0, 2, 4, 6, 8],
    datasets: [
      {
        label: 'pH',
        data: [0.5, -0.2, -0.5, 0.7, 0.3],
        backgroundColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Regiões',
        },
      },
      y: {
        title: {
          display: true,
          text: 'pH',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PHLevelsChart;
