import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyLineChart = () => {
  // Données d'exemple
  const data = [
    { category: "Janvier", co2: 3 },
    { category: "Février", co2: 2 },
    { category: "Mars", co2: 2.5 },
    { category: "Avril", co2: 5 },
    { category: "Mai", co2: 4 },
    { category: "Juin", co2: 2 },
    { category: "Juillet", co2: 1 },
    { category: "Aout", co2: 3 },
  ];

  const customTooltip = (value, name, props) => {
    const month = props.payload.category;
    return [`Taux de CO2: ${value}  %`];
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-80 md:h-96 mx-auto mt-16">
      <h2 className="text-center text-xl font-bold mb-4">Taux de Co2</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 50, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip
            formatter={customTooltip}
          />
          <Legend />
          <Line type="monotone" dataKey="co2" stroke="#59C19B" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
