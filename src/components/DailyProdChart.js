import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs from "dayjs";

const lineChartMargins = 50;

function DailyProdLineChart(data) {
  const dates = [
    new Date(2024, 4, 1),
    new Date(2024, 4, 2),
    new Date(2024, 4, 3),
    new Date(2024, 4, 4),
    new Date(2024, 4, 5),
  ];
  const seriesData = data.series;
  return (
    <LineChart
      xAxis={[{
        label: "Date",
        data: dates,
        tickInterval: dates,
        scaleType: "time",
        valueFormatter: (date) => dayjs(date).format("DD/MM"),
      }]}
      yAxis={[{
        label: "KW",
      }]}
      series={[
        {
          label: (location) => location === 'legend' ? undefined : "Production (KW/h) :",
          data: seriesData,
        },
      ]}
      height={300}
      margin={{
        left: lineChartMargins,
        right: lineChartMargins,
        top: lineChartMargins,
        bottom: lineChartMargins
      }}
      grid={{
        vertical: true,
        horizontal: true
      }}
    />
  );
}

export default function DailyProdChart() {
  const data = [2, 5.5, 8, 10.5, 12];
  return (
    <DailyProdLineChart
      series={data}
    />
  );
}