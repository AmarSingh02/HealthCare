import React, { useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { div } from 'framer-motion/client';

const Community = () => {

  const [isPopupOpen, setIsPopupOpen]=useState(false);

  const handleOpenPopup=()=>{
    setIsPopupOpen(true)
  }

   const handleclosePopup=()=>{
    setIsPopupOpen(false)
  }
  return (
    <div className='p-4'>
        <Breadcrumbs/>
      <div className="flex justify-between">

        <h2>Community </h2>

   <p className="text-xl cursor-pointer bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-500" onClick={handleOpenPopup}>
  +
</p>
      </div>

{isPopupOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-50 z-50 p-5">
    <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full h-full z-50 text-center bg-black/10 bg-opacity">



      <button 
        onClick={handleclosePopup}
        className="absolute cursor-pointer top-2 right-2 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600"
      >
        ✕
      </button>
  

      <h3 className="text-lg font-bold mb-4">Add Community</h3>
      <p>Popup content goes here...</p>
    </div>
  </div>
)}

    </div>
  )
}

export default Community
