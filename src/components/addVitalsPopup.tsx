import React, { useState } from 'react';

interface AddVitalsPopupProps {
  onClose: () => void;
}

const tabs = ['Blood Pressure', 'Sugar','SPO2','Body Temperature','Heart Rate', 'Other'];

const AddVitalsPopup: React.FC<AddVitalsPopupProps> = ({ onClose }) => {
  const [selectedTab, setSelectedTab] = useState<string>('Blood Pressure');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [date, setDate] = useState('');

  return (
   <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">


      {/* <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg flex p-6"> */}
        <div className="bg-white w-full h-auto max-w-screen-xl rounded-none shadow-lg flex p-6 overflow-auto rounded-xl">

       
        <div className="w-1/3 border-r pr-4">
          <h3 className="text-lg font-bold mb-4">Select Vitals</h3>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`block w-full text-left px-4 py-2 rounded-md mb-2 ${
                selectedTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

  
        <div className="w-2/3 pl-6">
          <h3 className="text-lg font-semibold mb-4">{selectedTab} Details</h3>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Input 1</label>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="w-full border rounded-lg p-2"
              placeholder="Enter value"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Input 2</label>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="w-full border rounded-lg p-2"
              placeholder="Enter value"
            />
          </div>

          <div className="mb-4">
  <label className="block mb-1 font-medium">Date</label>
  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="w-full border rounded-lg p-2"
  />
</div>


          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVitalsPopup;
