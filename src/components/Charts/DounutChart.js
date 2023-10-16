import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const data = {
   labels: ['Red', 'Green', 'Yellow'],
   datasets: [
      {
         data: [35, 70, 55],
         backgroundColor: ['#f43396', '#5c35e9', '#f1effc'],
      },
   ],
};

// Change thickness of line for the data section of the
// doughnut chart that displays the amount that is left to be raised. Accessing data[1] gets us the
// correct data section of the doughnut we want to manipulate.
const plugins = [
   {
      beforeDraw: function (chart) {
         if (options.elements.customCutout !== undefined) {
            let flexoInner = 100;
            let flexoOuter = 100;
            chart.getDatasetMeta(0).data[0].innerRadius = flexoInner - 60;
            chart.getDatasetMeta(0).data[0].outerRadius = flexoOuter - 20;
            chart.getDatasetMeta(0).data[1].innerRadius = flexoInner - 55;
            chart.getDatasetMeta(0).data[1].outerRadius = flexoOuter - 25;
            chart.getDatasetMeta(0).data[2].innerRadius = flexoInner - 30;
            chart.getDatasetMeta(0).data[2].outerRadius = flexoOuter - 50;
            chart.update();
         }
      },
   },
   {
      beforeDraw: function (chart) {
         var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 160).toFixed(2);
         ctx.font = fontSize + 'em sans-serif';
         ctx.textBaseline = 'top';
         var text = '65%',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
      },
   },
];

const options = {
   // cutoutPercentage: 80,
   animation: true,
   plugins: {
      legend: {
         display: false,
      },
   },
   maintainAspectRatio: false,
   elements: {
      customCutout: true,
      arc: {
         borderWidth: 0,
         onHover: function (data) {
            console.log(1, data);
         },
      },
   },
   aspectRatio: 1,
   responsive: true,
   cutoutPercentage: 100,
};

export const DoughnutChart = () => {
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
               Customers
            </div>
            <div
               style={{
                  opacity: '50%',
                  fontSize: '0.75rem',
                  fontWeight: 500,
               }}
            >
               Customers that buy products
            </div>
         </div>
         <div style={{ height: '250px' }}>
            <Doughnut data={data} options={options} plugins={plugins} />
         </div>
      </>
   );
};
