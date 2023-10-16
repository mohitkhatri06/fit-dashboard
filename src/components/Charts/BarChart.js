import React from 'react';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

export const options = {
   scales: {
      x: {
         grid: {
            display: false,
         },
      },
      y: {
         grid: {
            display: false,
         },
         ticks: {
            display: false,
         },
      },
   },
   maintainAspectRatio: false,

   responsive: true,
   borderRadius: 6,
   2: 0,
   3: 0,
   7: 9,

   plugins: {
      legend: {
         display: false,
      },
      title: {
         display: true,
         text: 'Monthly Earning',
      },
   },
};

const labels = [
   'Jan',
   'Feb',
   'Mar',
   'Apr',
   'May',
   'Jun',
   'Jul',
   'Aug',
   'Sep',
   'Oct',
   'Nov',
   'Dec',
];
//const labels = ['January', 'February', 'March'];
export const data = {
   labels,
   datasets: [
      {
         // label: 'Dataset 1',
         data: labels.map(
            () => Math.random({ min: 0, max: 1000 }).toFixed(2) * 100
         ),
         backgroundColor: '#f1eefe',
         hoverBackgroundColor: '#5932e8',
      },
      //   {
      //      //  label: 'Dataset 2',
      //      data: labels.map(
      //         () => Math.random({ min: 0, max: 100 }).toFixed(2) * 100
      //      ),
      //      backgroundColor: '#6e62e5',
      //   },
   ],
};

export function BarChart() {
   return (
      <>
         <div
            style={{
               textAlign: 'left',
               paddingLeft: '1rem',
               paddingTop: '1.3rem',
            }}
         >
            <div
               style={{
                  fontWeight: 800,
                  fontSize: '1.2rem',
               }}
            >
               Overview
            </div>
            <div
               style={{
                  opacity: '50%',
                  fontSize: '0.75rem',
                  fontWeight: 500,
               }}
            >
               Monthly Earning
            </div>
         </div>
         <div style={{ height: '250px' }}>
            <Bar options={options} data={data} />
         </div>
      </>
   );
}
