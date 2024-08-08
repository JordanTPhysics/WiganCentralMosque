import React, { useEffect, useRef } from 'react';
import Chart, { TimeScale } from 'chart.js/auto';
import { Scatter } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import { ChartOptions } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { format } from 'date-fns';
import 'chartjs-adapter-moment';
import { SalaahTime } from '../pages/timetable';

Chart.register(TimeScale)

interface TimeSeriesChartProps {
  data: SalaahTime[];
  yAxisLabel: string;
}


const mapData = (data: SalaahTime[], field: keyof SalaahTime) => {
  return data.map(entry => ({
    x: entry.Date, // Use the index as the x-value for each day
    y: entry[field as string] ? convertTimeStringToInteger(entry[field as string]) : null,
  }));
};

const convertTimeStringToInteger = (timeString: string) => {
  if (!timeString || typeof timeString !== 'string') {
    return 0;
  }
  const [hours, minutes] = timeString.split(':');

    return parseInt(hours, 10) + parseInt(minutes, 10) / 60;
  
};



const TimeSeriesChart = ({ data, yAxisLabel }: TimeSeriesChartProps) => {

  const chartData = {
    datasets: [
      { label: 'Fajr', data: mapData(data, 'Fajr'), pointBackgroundColor: 'red' },
      { label: 'Sunrise', data: mapData(data, 'Sunrise'), pointBackgroundColor: 'orange' },
      { label: 'Dhuhr', data: mapData(data, 'Dhuhr'), pointBackgroundColor: 'white' },
      { label: 'Asr', data: mapData(data, 'Asr'), pointBackgroundColor: 'green' },
      { label: 'Maghrib', data: mapData(data, 'Maghrib'), pointBackgroundColor: 'magenta' },
      { label: 'Isha', data: mapData(data, 'Isha'), pointBackgroundColor: 'blue' },
    ],
  };

  const chartOptions: ChartOptions<'scatter'> = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day', // Display data on a daily basis
          parser: 'DD/MM/YYYY', // Use 'DD/MM/YYYY' for UK format
          tooltipFormat: 'DD/MM/YYYY', // Use 'DD/MM/YYYY' for UK format in tooltips
          displayFormats: {
            day: 'YYYY-MM-DD' // Format of the displayed date
          },
        },
        title: {
          display: true,
          text: 'Date',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisLabel,
          color: 'white',

        },
        ticks: {
          // Use callback to format Y-axis labels
          callback: (value) => format(value, 'HH:mm'),
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            if (label) {

              const minutes = Number(context.parsed.y.toString().split(".")[1]) > 0 ? Math.floor(60 * Number(context.parsed.y.toString().split(".")[1].substring(0, 2)) / 100) : 0;
              let minutesString;
              if (minutes < 10) {
                minutesString = "0" + minutes.toString();
              } else if (minutes == 0) {
                minutesString = "00";
              } else {
                minutesString = minutes.toString();
              }
              const time = context.parsed.y.toString().split(".")[0] + ":" + minutesString;
              const date = format(context.parsed.x, 'dd/MM');
              return `${date} \n ${label}: ${time}`;
            }
            return `${context.parsed.y}`;
          },
        },
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };


  return (
    <Scatter data={chartData} options={chartOptions}  />
  );
};

export default TimeSeriesChart;
