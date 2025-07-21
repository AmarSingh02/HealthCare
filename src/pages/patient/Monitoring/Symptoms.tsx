import React, { useState } from 'react'
import SeverityPopup from '../../../components/severityPopup'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SympthomsGraph from '../../../components/sympthomsGraph';
import type { Mode } from '../../../components/DateSelector';
import DateSelector from '../../../components/DateSelector';
import Calendar from '../../../components/DateSelector';
import type { CalendarMode } from '../../../components/DateSelector';


const SymptomsMonitoring = () => {
  const generalSymptom = [
    { id: 1, symptomName: 'Pain' },
    { id: 2, symptomName: 'Fever' },
    { id: 3, symptomName: 'Fatigue' },
    { id: 4, symptomName: 'Headache' },
    { id: 5, symptomName: 'Weight loss' },
{ id: 6, symptomName: 'Lumps or Swelling' },
{ id: 7, symptomName: 'Appetite Changes' },
{ id: 8, symptomName: 'Nausea' },
    
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSymptom, setSelectedSymptom] = useState<any>(null);

  const handleOpenPopup = (symptom: any) => {
    setSelectedSymptom(symptom);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedSymptom(null);
  };

  const handleSelectSeverity = (severity: any) => {
    console.log(`Severity for ${selectedSymptom.symptomName}: ${severity}`);
    handleClosePopup();
  };




    const [rangeStart, setRangeStart] = useState<Date | null>(new Date());
  const [rangeEnd, setRangeEnd] = useState<Date | null>(new Date());

  const [mode, setMode] = useState<CalendarMode>('Daily');


  return (
<>
<Outlet/>

<div className="w-full h-full flex flex-col md:flex-row p-3">
  <div className="w-full md:w-[40%] bg-white h-auto p-4 rounded-xl shadow-md md:mr-4 mb-4 md:mb-0 overflow-y-auto">
    <h2>
      <span className="text-blue-500 font-bold patient_username">Hi Elizabeth</span>, How are you feeling? Are there any symptoms troubling you?
    </h2>

    <div className="general_symptom flex flex-wrap gap-5 mt-5 mb-10">
      {generalSymptom.map((item) => (
        <p
          key={item.id}
          className="bg-gray-100 rounded-2xl px-5 py-1 cursor-pointer"
          onClick={() => handleOpenPopup(item)}
        >
          {item.symptomName} <span className="text-black-600 text-3xl">+</span>
        </p>
      ))}
    </div>

    <div className="flex justify-between mt-8 mb-5">
      <button className="text-blue-500">+ More Symptom</button>
      <button className="bg-blue-500 text-white rounded-3xl px-4 py-1 cursor-pointer">Submit</button>
    </div>
  </div>

  <div className="w-full md:w-[60%] p-3 bg-white rounded-xl">
    <div className="flex mb-4 flex-wrap">
      <button
        className={`px-4 py-2 mr-2 mb-2 rounded ${
          mode === 'Daily' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setMode('Daily')}
      >
        Daily
      </button>
      <button
        className={`px-4 py-2 mb-2 rounded ${
          mode === 'Weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setMode('Weekly')}
      >
        Weekly
      </button>
    </div>

    <Calendar
      rangeStart={rangeStart}
      rangeEnd={rangeEnd}
      onRangeChange={(start, end) => {
        setRangeStart(start);
        setRangeEnd(end);
      }}
      mode={mode}
    />

    <SympthomsGraph />
  </div>

  <SeverityPopup
    isOpen={isPopupOpen}
    onClose={handleClosePopup}
    symptom={selectedSymptom}
    onSelectSeverity={handleSelectSeverity}
  />
</div>


</>
  );
};

export default SymptomsMonitoring;


