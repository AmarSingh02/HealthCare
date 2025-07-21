import React, { useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs';



const Education = () => {
  const tabs = [
    { id: 1, label: 'All', path: '/symptom-monitoring' },
    { id: 2, label: 'Causes', path: '/symptom-monitoring/vitals' },
    { id: 3, label: 'Symptom and Sign', path: '/symptom-monitoring/prescription' },
    { id: 4, label: 'Treatment', path: '/symptom-monitoring/prescription' },
    { id: 5, label: 'Diagnosis', path: '/symptom-monitoring/prescription' },
    { id: 6, label: 'Prevention Tips', path: '/symptom-monitoring/prescription' },
  ];

  const educationBlog = [
    { id: 1, typeofDiease: "Causes", title: 'Cancer and diabetes: Often more than a chance encounter', decription: "Cancer and diabetes are two of the most common and life-changing health issues worldwide. While scientists still do not " },

    { id: 2, typeofDiease: "Symptom and Sign", title: 'UICC works across the spectrum of cancer prevention, collaborating with member organisations', decription: "Cancer and diabetes are two of the most common and life-changing health issues worldwide. While scientists still do not " },

    { id: 3, typeofDiease: "Treatment", urlPath: 'https://www.youtube.com/watch?v=QV7j-XQ7wv8&pp=ygULYWJvdXQgZmV2ZXI%3D', decription: "Cancer and diabetes are two of the most common and life-changing health issues worldwide. While scientists still do not " },
    { id: 4, typeofDiease: "Treatment", title: 'A cancer risk factor is anything that increases a person likelihood...', decription: "Cancer and diabetes are two of the most common and life-changing health issues worldwide. While scientists still do not " },

    { id: 5, typeofDiease: "Symptom and Sign", title: 'UICC works across the spectrum of cancer prevention, collaborating with member organisations', decription: "Cancer and diabetes are two of the most common and life-changing health issues worldwide. While scientists still do not " },

    { id: 6, typeofDiease: "Treatment", urlPath: 'https://www.youtube.com/watch?v=QV7j-XQ7wv8&pp=ygULYWJvdXQgZmV2ZXI%3D', decription: "Cancer and diabetes are two of the most common and life-changing health issues worldwide. While scientists still do not " },
    { id: 7, typeofDiease: "Treatment", title: 'A cancer risk factor is anything that increases a person likelihood...', decription: "Cancer and diabetes are two of the most common and life-changing health issues worldwide. While scientists still do not " },


  ]

  const [activeTab, setActiveTab]=useState("All");
  const filterBlog=activeTab==="All" ? educationBlog : educationBlog.filter((item)=> item.typeofDiease === activeTab)

  return (
    <div className='p-5 h-screen flex flex-col'>
      <Breadcrumbs />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Patient Education</h2>


        <div className='flex flex-wrap gap-3'>
  {tabs.map((item) => (
    <button
      key={item.id}
      onClick={() => setActiveTab(item.label)}
      className={`px-8 py-1 shadow-md rounded-3xl transition-colors 
        ${activeTab === item.label 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-800 hover:bg-gray-200'}`}
    >
      {item.label}
    </button>
  ))}
</div>

      </div>

      <div className="w-full flex flex-1 overflow-hidden mt-5">
        <div className="w-[30%] p-2 flex-shrink-0">
          <div className="left_patient_education relative shadow-md rounded-2xl h-full bg-gray-100 bg-[url('./assets/images/patientEducation.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#2FAECF] text-white bg-opacity-90 rounded-b-2xl">
              <h3 className="font-semibold text-lg mb-2">
                CAR T cell therapy for cancer treatment: How it works
              </h3>
              <p className='text-white'>
                Chimeric antigen receptor T cell therapy – often called CAR T cell therapy – is a type of cancer treatment used to treat children and young adults with...
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%] p-2 h-full overflow-y-auto overflow-hidden">
  <div className="bg-gray-50 rounded-2xl p-5 grid grid-cols-2 gap-4">
    {filterBlog.map((item, index) => (
      <div key={index} className="bg-white rounded-xl shadow p-4">
        <p className="text-sm text-gray-500">#{item.id} - {item.typeofDiease}</p>

      

        {item.urlPath ? (
  <div className="aspect-video">
    <iframe
      src={`https://www.youtube.com/embed/${new URL(item.urlPath).searchParams.get("v")}`}
      title={`YouTube video ${item.id}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded"
    ></iframe>
  </div>
) : (
  <h4 className="text-md font-semibold mt-1">{item.title}</h4>
)}


        <p className="mt-2 text-gray-700 text-sm">{item.decription}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  )
}

export default Education