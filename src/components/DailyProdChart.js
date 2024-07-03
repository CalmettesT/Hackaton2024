import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs from "dayjs";

const lineChartMargins = 40;

function DailyProdLineChart(data) {
  const seriesData = data.series;
  const startingDate = dayjs(data.startingDate)
                    || dayjs(new Date()).subtract(seriesData.length, 'day').toDate();
  const dates = [];
  for (var i = 0; i < seriesData.length; i++) {
    dates.unshift(startingDate.subtract(i, 'day').toDate());
  }
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
          data: seriesData
        },
      ]}
      tooltip={{
        trigger: 'none',
      }}
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

export default function DailyProdChart(data) {
  const series = data.series;
  const startingDate = data.startingDate;
  return (
    <DailyProdLineChart
      series={series}
      startingDate={startingDate}
    />
  );
}