import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PatientListTable from '../../../components/PatientListTable'

const MyPatientList = () => {
  const patients = [
    {
      id: 1,
      name: 'John Doe',
      diagnosis: 'Diabetes',
      lastCons: '2025-07-01',
      treatment: 'Insulin Therapy',
      status: 'green',
      Image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      diagnosis: 'Hypertension',
      lastCons: '2025-07-15',
      treatment: 'ACE Inhibitors',
      status: 'red',
      Image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      diagnosis: 'Asthma',
      lastCons: '2025-06-20',
      treatment: 'Inhaler Therapy',
      status: 'green',
      Image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: 4,
      name: 'Emily Davis',
      diagnosis: 'Arthritis',
      lastCons: '2025-07-25',
      treatment: 'Pain Management',
      status: 'green',
      Image: 'https://randomuser.me/api/portraits/women/55.jpg',
    },
    {
      id: 5,
      name: 'David Wilson',
      diagnosis: 'Heart Disease',
      lastCons: '2025-07-10',
      treatment: 'Beta Blockers',
      status: 'red',
      Image: 'https://randomuser.me/api/portraits/men/60.jpg',
    },
    {
      id: 6,
      name: 'John Doe',
      diagnosis: 'Diabetes',
      lastCons: '2025-07-01',
      treatment: 'Insulin Therapy',
      status: 'green',
      Image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 7,
      name: 'Jane Smith',
      diagnosis: 'Hypertension',
      lastCons: '2025-07-15',
      treatment: 'ACE Inhibitors',
      status: 'red',
      Image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 8,
      name: 'Michael Johnson',
      diagnosis: 'Asthma',
      lastCons: '2025-06-20',
      treatment: 'Inhaler Therapy',
      status: 'green',
      Image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: 9,
      name: 'Emily Davis',
      diagnosis: 'Arthritis',
      lastCons: '2025-07-25',
      treatment: 'Pain Management',
      status: 'green',
      Image: 'https://randomuser.me/api/portraits/women/55.jpg',
    },
    {
      id: 10,
      name: 'David Wilson',
      diagnosis: 'Heart Disease',
      lastCons: '2025-07-10',
      treatment: 'Beta Blockers',
      status: 'red',
      Image: 'https://randomuser.me/api/portraits/men/60.jpg',
    },
  ]

  return (
    <div className="mt-5 p-5">
      <Breadcrumbs />
      <div className='shadow-md bg-white p-4 rounded-xl'>

    
      <PatientListTable needAction={true} patients={patients} />
        </div>
    </div>
  )
}

export default MyPatientList
