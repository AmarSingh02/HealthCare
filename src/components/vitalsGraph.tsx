import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import Calendar from '../components/DateSelector';
import CalendarMode from '../components/DateSelector';

const VitalsGraph = () => {

      const [rangeStart, setRangeStart] = useState<Date | null>(new Date());
      const [rangeEnd, setRangeEnd] = useState<Date | null>(new Date());
    
      const [mode, setMode] = useState<CalendarMode>('Daily');
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
    <div id="chart" className='bg-white p-3 rounded-2xl mt-2'>

<div className='mb-2'>
<Calendar
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              onRangeChange={(start: React.SetStateAction<Date | null>, end: React.SetStateAction<Date | null>) => {
                setRangeStart(start);
                setRangeEnd(end);
              }}
              mode={mode}
            />
</div>
         
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={410}

       
      />

       
    </div>
  );
};

export default VitalsGraph;
