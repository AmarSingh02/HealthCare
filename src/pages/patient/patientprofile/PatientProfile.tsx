import React, { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Heading from '../../../components/Heading';

const PatientProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('My-Profile');

  return (
    <div className="mt-5 p-5">
      <Breadcrumbs />
      <Heading heading="My Profile" />

      <div className="w-full flex shadow-md p-5 bg-white rounded-xl mt-4 gap-6">
        
        {/* Sidebar */}
        <div className="w-[25%] border-r pr-4">
          

          <div className="mt-6 flex flex-col gap-2">
            {[ 'My-Profile', 'security'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-4 py-2 rounded-md ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {tab === 'overview'
                  ? 'Overview'
                  : tab === 'edit'
                  ? 'Edit Profile'
                  : 'Security Settings'}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="w-[75%] pl-4">
       

          {activeTab === 'My-Profile' && (
            <div>
              <h2 className="font-bold text-xl mb-3">Edit Profile</h2>
  <form className="flex flex-col gap-3 w-full">
  {/* Row with 3 inputs */}
  <div className="grid grid-cols-3 gap-5 w-full">
    <div>


    <label htmlFor="">Patient Id</label>
    <input
      type="text"
      placeholder="Patient Id"
      className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
      disabled
    />
    </div>

<div>
  <label htmlFor="">Full Name</label>
   <input
      type="text"
      placeholder="Full Name"
      className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
      
    />
</div>
<div>
  <label htmlFor="salutation" className="block mb-1 font-medium">
    Select
  </label>
  <select
    id="salutation"
    className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
    defaultValue=""
  >
    <option value="" disabled>
      Select
    </option>
    <option value="Mr">Mr</option>
    <option value="Mrs">Mrs</option>
  </select>
</div>


   <div>


    <label htmlFor="">Middle Name</label>
    <input
      type="text"
      placeholder="Middle Name"
      className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
      
    />
    </div>
    <div>


    <label htmlFor="">Last Name</label>
    <input
      type="text"
      placeholder="Last Name"
      className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
      
    />
    </div>

    <div>


    <label htmlFor="">Mobile Number</label>
    <input
      type="tel"
      placeholder="Mobile Number"
      className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
      
    />
    </div>

      <div>

 <div>
  <label htmlFor="gender" className="block mb-1 font-medium">
    Gender
  </label>
  <select
    id="gender"
    className="border rounded-3xl p-2 w-full border-gray-400 bg-gray-100 mb-2"
    defaultValue=""
  >
    <option value="" disabled>
      Select Gender
    </option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
</div>

    <label htmlFor="">Address </label>
    <input
      type="tel"
      placeholder="Address "
      className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
      
    />
    </div>


    <div>


    <label htmlFor="">Country </label>
    <input
      type="text"
      placeholder="Country "
      className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
      
    />
    </div>

    <div>


    <label htmlFor="">City </label>
    <input
      type="text"
      placeholder="city "
      className="border rounded p-2 w-full rounded-3xl border border-gray-400 bg-gray-100"
      
    />
    </div>

    


  </div>

  <button className="bg-blue-500 text-white px-4 py-2 rounded self-start">
    Save Changes
  </button>
</form>

            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h2 className="font-bold text-xl mb-3">Security Settings</h2>
              <form className="flex flex-col gap-3">
             
                <input type="password" placeholder="Current Password" className="border rounded p-2" />
                <input type="password" placeholder="New Password" className="border rounded p-2" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Update Password</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
