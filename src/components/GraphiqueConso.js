import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const GraphiqueConso = () => {
  return (
    <div>

    <BarChart
    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
    width={500}
    height={300}
    barLabel="value"
    />

    </div>
  );
};

export default GraphiqueConso;