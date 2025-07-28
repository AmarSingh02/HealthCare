import React, { useState } from 'react';
import Heading from '../../../components/Heading';
import BloodPressure from '../../../assets/images/BloodPressure.png'
import BodyTemperature from '../../../assets/images/BodyTemperature.png'
import BloodSugar from '../../../assets/images/BloodSugar.png'
import HeartRate from '../../../assets/images/Heart Rate.png';
import Respirartory from '../../../assets/images/RespiratoryRate.png';
import SPO2 from '../../../assets/images/SpO2.png'
import VitalsGraph from '../../../components/vitalsGraph';
import AddVitalsPopup from '../../../components/addVitalsPopup';

const Vitals = () => {
  const getVitals = [
    { id: 1, title: "Blood Pressure", value: '120', date: '5/7/25', imageUrl: BloodPressure },
    { id: 2, title: "Body Temperature", value: '98.6', date: '5/7/25', imageUrl: BodyTemperature },
    { id: 3, title: "Heart Rate", value: '120', date: '5/7/25', imageUrl: HeartRate },
    { id: 4, title: 'Blood Sugar', value: '100', date: '5/6/25', imageUrl: BloodSugar },
    { id: 5, title: "Oxygen Saturation SpO2", value: '98.6', date: '5/7/25', imageUrl: SPO2 },
    { id: 6, title: "Respiratory Rate", value: '120', date: '5/7/25', imageUrl: Respirartory },

  ];

  const [openModal, setOpenModel] = useState(false);

  const handlePopup = () => {
    setOpenModel(!openModal)
  }

  return (

    <>
      <div onClick={handlePopup} className="relative top-[-60px] right-[-120px] bg-blue-500 text-md rounded-full h-10 w-30 cursor-pointer flex justify-center items-center text-white">
        Add vitals +
      </div>

      {openModal && (
        <AddVitalsPopup onClose={() => setOpenModel(false)} />
      )}

      <div className="w-full flex p-3">
        <div className='w-[40%]'>

          {/* <Heading heading='Get Vitals'/> */}
          <div className="w-[100%] flex flex-wrap">

            {getVitals.map((vital) => (
              <div
                key={vital.id}
                className="w-1/2 p-2 "
              >
                <div className="getVitals_container h-[138px] shadow-md rounded-2xl p-4 bg-white">
                  <div className="flex flex-wrap">
                    <div className="w-1/3 flex justify-center items-center bg-[#F8F8F8] h-[110px] rounded-2xl">
                      <img src={vital.imageUrl} alt="Dummy img" className='h-15 w-10' />
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
          <VitalsGraph />
        </div>
      </div>
    </>
  );
};

export default Vitals;
