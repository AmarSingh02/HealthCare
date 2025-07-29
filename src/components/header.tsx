// src/components/Header.tsx
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'

const Header: React.FC = () => {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

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
                                    ? 'bg-gray-900 text-white' // Active styles
                                    : 'bg-white' // Default hover styles
                                }`
                            }
                        >
                            Dashboard
                        </NavLink>

                        <NavLink to="/symptom-Monitoring" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white' // Active styles
                                : ' bg-white' // Default hover styles
                            }`
                        }>
                            Monitoring
                        </NavLink>
                        <NavLink to="/patient-education" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white' // Active styles
                                : 'bg-white' // Default hover styles
                            }`
                        } >
                            Education
                        </NavLink>

                         <NavLink to="/community" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white' // Active styles
                                : 'bg-white' // Default hover styles
                            }`
                        } >
                            Community
                        </NavLink>

                        <NavLink to="/collabroation" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white' // Active styles
                                : 'bg-white' // Default hover styles
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
                                ? 'bg-gray-900 text-white' // Active styles
                                : 'bg-white' // Default hover styles
                            }`
                        } >
                            Dashboard
                        </NavLink>
                        <NavLink to="/doctor-patients" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white' // Active styles
                                : 'bg-white' // Default hover styles
                            }`
                        }>
                            Patients
                        </NavLink>
                        <NavLink to="/doctor-schedule" className={({ isActive }) =>
                            `shadow-md px-8 py-1 rounded-full ${isActive
                                ? 'bg-gray-900 text-white' // Active styles
                                : 'bg-white' // Default hover styles
                            }`
                        }>
                            Schedule
                        </NavLink>
                    </>
                )}

                {role && (
                    <span className="ml-4 font-bold">
                        Role: {role.charAt(0).toUpperCase() + role.slice(1)}
                    </span>
                )}

                {role && (
                    <button
                        onClick={handleLogout}
                        className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Logout
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Header;
