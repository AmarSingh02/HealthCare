import React from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import './style.scss';

const SymptomMonitoring = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 1, label: 'Symptoms', path: '/symptom-Monitoring' },
    { id: 2, label: 'Vitals', path: '/symptom-monitoring/vitals' },
    { id: 3, label: 'Prescription', path: '/symptom-monitoring/prescription' },
  ];

  const isTabActive = (tabPath: string) => location.pathname === tabPath;

  const activeTab=tabs.find(tab => isTabActive(tab.path));
  const heading=activeTab? activeTab.label:'Symptoms Monitoring';

  return (
    <div className="p-5">
      <Breadcrumbs />

      <div className="flex justify-between">
        <div className="heading">
          <h1>{heading}</h1>
        </div>

        <div className="tabs flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`p-1 w-30 h-10 rounded-4xl cursor-pointer ${
                isTabActive(tab.path)
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SymptomMonitoring;
