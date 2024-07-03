import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Enregistrer les composants nécessaires pour Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphiqueConso = () => {
  const data = {
    labels: ['Janvier', 'Février', 'Mars'], // Assurez-vous que les labels sont définis correctement
    datasets: [
      {
        label: 'Consommation',
        data: [4, 4, 5],
        backgroundColor: 'rgba(89, 193, 155, 0.6)',
        borderColor: 'rgba(89, 193, 155, 1)',
        borderWidth: 1,
      },
      {
        label: 'Production',
        data: [2.5, 2, 3],
        backgroundColor: 'rgba(255, 160, 72, 0.6)',
        borderColor: 'rgba(255, 160, 72, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, // Assurez-vous que cette option est définie sur true
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Historique de consommation/production',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Mois',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Puissance',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraphiqueConso;
