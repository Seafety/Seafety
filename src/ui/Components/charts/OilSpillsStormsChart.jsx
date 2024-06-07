// src/ui/Components/charts/OilSpillsStormsChart.jsx
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

const OilSpillsStormsChart = () => {
  const data = {
    labels: Array.from({ length: 9 }, (_, i) => i),
    datasets: [
      {
        label: 'Previsão',
        data: [
          2, 5, 7, 3, 6, 8, 5, 2, 4,
        ],
        backgroundColor: 'rgba(54, 162, 235, 1)',
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
          text: 'Dias',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default OilSpillsStormsChart;
