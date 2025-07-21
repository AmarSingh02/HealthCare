import React from 'react';
import PATIENTPROFILE from '../../../assets/images/patient_home_profile.jpg';
import HAND_WAVE from '../../../assets/imageS/hand_wave.png';
import ArrowUpRight from '../../../assets/images/ArrowUpRight.png';
import Symptoms from '../../../assets/images/Symptoms.png'
import StethoscopeIcon from '../../../assets/images/StethoscopeIcon.png';
import HeartPulseIcon from '../../../assets/images/Heart Rate.png'
import './style.scss';
import { span } from 'framer-motion/client';
import { Link } from 'react-router-dom';
import JourneyMap from './JouneryMap';
const PatientDashboard = () => {


  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 17) return "Good Afternoon";
    return "Good Evening";
  };
  return (
    <>
      <div className=" text-md p-4 mt-15  flex">

        <div className="w-[15%] shadow-md h-145 p-5 mt-4 rounded-2xl border border-gray-300">
          <div className="patient_details text-center">
            <div className="profile_img flex justify-center">
              <img src={PATIENTPROFILE} alt="" />
            </div>
            <h4 className='font-bold mt-4'>Patient Name</h4>
            <p className="text-[#828282] ">patient@gmail.com</p>
            <p className="text-[#828282] mb-4 ">45 Year  Male</p>

            <span className='bg-gray-500 rounded-full text-white px-3 py-1'>
              PID000123
            </span>

          </div>
        </div>
        <div className="w-[60%] flex gap-4 p-3 ml-4 shadow-md h-[580px] mt-4 rounded-2xl bg-[#EFF9FF]  relative z-[-999] ">

          <div className="w-[70%] ">

          <div className='p-4 rounded-2xl h-90 patient_greeting'>
<div className="img wave-hand mt-30">
              <img src={HAND_WAVE} alt="" width='50px' height='50px' />
            </div>
            <div className="patient_greet  ">


              <h2 className='text-[#3279AD]'>
                {getGreeting()},   Patient Name
              </h2>

              <p className="pt-3 md:pt-5 text-sm ">Your progress over the past few weeks is inspiring - keep going, brighter days are ahead.</p>
            </div>
          </div>

            


<div className="lorem shadow-md p-4 rounded-2xl mt-4 border border-gray-300">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo expedita facilis laboriosam sint sunt perferendis fugit pariatur voluptas mollitia. Itaque suscipit ipsam, molestias adipisci eveniet ipsa libero obcaecati? Est, quisquam.
              Aperiam quibusdam aliquid enim sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

             
            </div>
            
          </div>

        
          <div className="w-[30%] shadow-md bg-[#E3F3DB] p-2 rounded-2xl">
            <div className="w-full  bg-gradient-to-b from-light-green via-[#E3F3DB99] to-light-green rounded-xl flex md:flex-col justify-center items-center p-2 gap-2">
              <div className="w-full h-1/4 md:p-4   flex  gap-2 justify-between items-center md:border-b-2">
                <img src={Symptoms} alt="" className="w-10 h-10 text-green-icon" />
                <p>Symptoms</p>

                <Link
                  to="/symptom-Monitoring"
                  className=" flex justify-center items-center bg-color-white bg-opacity-30 rounded-full h-10 w-10"
                >
                  <img src={ArrowUpRight} alt="Arrow Up Right" className="text-text-gray w-10 h-10 cursor-pointer"  />
                </Link>
              </div>


              <div className="w-full h-1/4 md:p-4   flex  gap-2 justify-between items-center md:border-b-2">
                <img src={HeartPulseIcon} alt="" className="w-8 h-8 text-green-icon" />
                <p>Vitals Sign</p>

                <Link
                  to="/monitoring/vitals"
                  className=" flex justify-center items-center bg-color-white bg-opacity-30 rounded-full h-10 w-10"
                >
                  <img src={ArrowUpRight} alt="Arrow Up Right" className="text-text-gray w-10 h-10" />
                </Link>
              </div>

              <div className="hidden w-full h-2/4 p-4 md:flex flex-col gap-2 justify-between items-center overflow-hidden">
                <div className="w-full flex gap-2 justify-between items-center">
                  <img src={StethoscopeIcon} alt="Stethoscope Icon" className="text-green-icon w-8 h-8" />
                  <p>Diagnosis</p>
                  <div className="flex justify-center items-center bg-color-white bg-opacity-30 rounded-full h-10 w-10">
                    <Link to ="/symptom-monitoring/vitals">
                 
                    <img src={ArrowUpRight} alt="Arrow Up Right" className="text-gray w-10 h-10" />
                       </Link>
                  </div>
                </div>
              </div>


            </div>
            <div className="w-full max-h-36 overflow-y-auto  no-scrollbar">
              <ul className="list-disc pl-4 text-[12px] text-text-gray space-y-1">
                <li>Primary Diagnosis: Invasive Ductal Carcinoma (C50.9)</li>
                <li>Lymphedema of left arm (I89.0)</li>
                <li>Fatigue due to cancer treatment (R53.83)</li>
                <li>Nutritional deficiency  Vitamin D (E55.9)</li>
              </ul>
            </div>
          </div>

        
        </div>

        


        <div className="w-[30%] mt-5 shadow-md rounded-2xl bg-[#f4f4f5] ml-4 h-145">
          <div className="h-120 flex items-center justify-center ">
            <JourneyMap />
          </div>

        </div>
      </div>
    </>


  );
};

export default PatientDashboard;