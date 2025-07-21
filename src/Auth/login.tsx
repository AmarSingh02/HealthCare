import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';

const users = [
  { email: 'patient@example.com', password: '123456', role: 'patient' },
  { email: 'doctor@example.com', password: '123456', role: 'doctor' },
  { email: 'provider@example.com', password: '123456', role: 'provider' },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState('patient@example.com');
  const [password, setPassword] = useState('123456');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('role', user.role);
      // navigate(`/home/${user.role}`);
       navigate('/patient-dashboard')
    } else {
      alert('Invalid credentials'); 
    }
  };

  return (
    <div className="min-h-screen h-screen flex flex-col justify-center items-end bg-gray-100 px-4 sm:px-6 login_section">
      <div className="w-full h-screen max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8 mt-5 mb-5">
        <h2 className="text-2xl text-blue-500 font-bold text-center mb-10 mt-30">
          User Login
        </h2>
       

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-4xl"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-4xl"
            required
          />


<div className="remember_me">
  <div className="rember">
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <input
        type="checkbox"
        // checked={remember}
        // onChange={handleChange}
      />
      Remember Me
    </label>
  </div>
</div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition rounded-4xl"
          >
            Login
          </button>
        </form>


        <div className="register_nav text-end mt-10 flex ml-20 ">
          <p>Don't have a account? &nbsp; </p>
          <Link to='/sign-up' className='text-purple-500 hover:text-purple-700"'>Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
