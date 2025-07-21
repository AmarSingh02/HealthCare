import React from 'react';
import './style.scss'
const Register = () => {
  return (
    <div className="register_container">
      <div className="register_section">
        <h2 className='text-center'>Create an account</h2>
        <form className="w-full">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
            required
          />
           <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
            required
          />
           <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
            required
          />

           
<select
  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
  required
>
  <option value="" disabled>Select a role</option>
  <option value="patient">Patient</option>
  <option value="doctor">Doctor</option>
</select>



          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
