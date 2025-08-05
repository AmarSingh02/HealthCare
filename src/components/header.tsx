import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'
import { FaRegUserCircle } from "react-icons/fa";
const Header: React.FC = () => {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <header className="fixed top-0 w-full flex justify-between items-center p-2 backdrop-blur-md bg-[#e5f4ff]/30 z-50">

            <div className="logo">
                <img src={Logo} alt="Logo" className="h-12 w-12 rounded-3xl" />
            </div>

            <nav className="flex gap-4 items-center">
                {role === 'patient' && (
                    <>
                        <NavLink
                            to="/patient-dashboard"
                            className={({ isActive }) =>
                                `shadow-md px-8 py-1 rounded-full ${isActive
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-white'
                                }`
                            }
                        >
                            Dashboard
                        </NavLink>

                        <NavLink to="/symptom-Monitoring" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white'
                                : ' bg-white'
                            }`
                        }>
                            Monitoring
                        </NavLink>
                        <NavLink to="/patient-education" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white'
                                : 'bg-white'
                            }`
                        } >
                            Education
                        </NavLink>

                        <NavLink to="/community" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white'
                                : 'bg-white'
                            }`
                        } >
                            Community
                        </NavLink>

                        <NavLink to="/collabroation" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white'
                                : 'bg-white'
                            }`
                        } >
                            Collabroation
                        </NavLink>
                    </>
                )}

                {role === 'doctor' && (
                    <>
                        <NavLink to="/doctor-dashboard" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white'
                                : 'bg-white'
                            }`
                        } >
                            Dashboard
                        </NavLink>
                        <NavLink to="/my-patient-list" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white'
                                : 'bg-white'
                            }`
                        }>
                            Patients List
                        </NavLink>
                        <NavLink to="/doctor-schedule" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white'
                                : 'bg-white'
                            }`
                        }>
                            Schedule
                        </NavLink>
                    </>
                )}

                {/* {role && (
                    <span className="ml-4 font-bold">
                        Role: {role.charAt(0).toUpperCase() + role.slice(1)}
                    </span>
                )} */}

                <div className="relative ml-4">
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    className="px-3 py-5 rounded-full"
  >
    <FaRegUserCircle size={30} className='cursor-pointer' />
  </button>

  {showDropdown && role && (
    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
      <Link
        to={role === 'patient' ? "/patient-profile" : "/doctor-profile"}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setShowDropdown(false)}
      >
        My Profile
      </Link>
      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  )}
</div>

            </nav>
        </header>
    );
};

export default Header;
