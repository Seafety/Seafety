// src/ui/Components/charts/WaterTemperatureChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const WaterTemperatureChart = () => {
  const data = {
    labels: [0, 2, 4, 6, 8],
    datasets: [
      {
        label: 'Temperatura(°C)',
        data: [0.5, 0.7, 0.2, 0.8, 0.6],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
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
          text: 'Dias',
        },
      },
      y: {
        title: {
          display: true,
          text: 'temperatura(°C)',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WaterTemperatureChart;
