// src/ui/Components/WeatherChart.jsx
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Grafico = ({ data, options }) => {
  return (
    <div className='grafico'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Grafico;
