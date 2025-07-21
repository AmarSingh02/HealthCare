import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SympthomsGraph = () => {
  const [state] = React.useState({
    series: [
      {
        name: "High - 2013",
        data: [28, 69, 33, 36, 32, 52, 33]
      },
      {
        name: "Low - 2013",
        data: [12, 81, 14, 18, 57, 13, 13]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: false,
          color: '#000',
          top: 18,
          left: 7,
     
        },
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Average High & Low Temperature',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
        //   opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 10,
        max: 100
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default SympthomsGraph;
