import React from 'react';
import Heading from '../../../components/Heading';

const Vitals = () => {
  const getVitals = [
    { id: 1, title: "Blood Pressure", value: '120', date: '5/7/25' },
    { id: 2, title: "Body Temperature", value: '98.6', date: '5/7/25' },
    { id: 3, title: "Sugar Level", value: '120', date: '5/7/25' },
    { id: 4, title: 'Body Mass', value: '100', date: '5/6/25' }
  ];

  return (
    <div className="w-full flex p-4">


<div className='w-[40%]'>


       <Heading heading='Get Vitals'/>
      <div className="w-[100%] flex flex-wrap">

    
        {getVitals.map((vital) => (
          <div
            key={vital.id}
            className="w-1/2 p-2 "
          >
            <div className="getVitals_container h-[138px] shadow-md rounded-3xl p-4">
              <div className="flex flex-wrap">
                <div className="w-1/3">
                  <img src="" alt="Dummy img" className="w-full h-auto" />
                </div>
                <div className="w-2/3 pl-2">
                  <h3>{vital.title}</h3>
                  <h4>{vital.value}</h4>
                  <p>{vital.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Right side: post */}
      <div className="w-[60%]">
        post
      </div>
    </div>
  );
};

export default Vitals;
