import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyLineChart = () => {
  // Données d'exemple
  const data = [
    { category: "Janvier", Mois: 3 },
    { category: "Février", Mois: 5.5 },
    { category: "Mars", Mois: 7.85 },
    { category: "Avril", Mois: 8.5 },
    { category: "Mai", Mois: 5 },
    { category: "Juin", Mois: 6 },
    { category: "Juillet", Mois: 9 },
    { category: "Aout", Mois: 8.5 },
  ];

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-80 md:h-96 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
      <h2 className="text-center text-xl font-bold mb-4">Argent gagné</h2>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip
            label="Argent gagné"
            formatter={(value) => `${value} €`}
          />
          <Legend />
          <Line type="monotone" dataKey="Mois" stroke="#59C19B" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
