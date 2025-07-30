import React from 'react';

const AddCommunityPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 p-4">
      <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full h-full overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Add New Community</h3>
          
          <div className="flex space-x-2">
            <button 
              className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600"
            >
              Add+
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">

            <div className='w-[100%] flex gap-4'>
<div className='w-[60%]'>

          <div>
            <label htmlFor="groupName" className="block mb21 font-medium">Group Name</label>
            <input 
              type="text" 
              id="groupName" 
              placeholder="Enter group name" 
              className="w-full border border-gray-300 rounded-3xl mb-4 p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="tags" className="block mb-1 fo2t-medium">Tags</label>
            <input 
              type="text" 
              id="tags" 
              placeholder="Enter tags" 
              className="w-full border border-gray-300 rounded-3xl mb-4 p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="category" className="block mb-2 font-medium">Category</label>
            <input 
              type="text" 
              id="category" 
              placeholder="Enter category" 
              className="w-full border border-gray-300 rounded-3xl mb-4 p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          
</div>

<div className="w-[40%] "> 
    
     <div>
            <label htmlFor="groupName" className="block mb-1 font-medium">Group Name</label>
            <input 
              type="file" 
              id="groupName" 
              placeholder=" drag and upload a imgae" 
              className="w-full border border-dash border-gray-400 rounded-lg p-20 h-[210px]  cursor-pointer   outline-none"
            />
          </div>
</div>


            </div>
             <div>
            <label htmlFor="groupName" className="block mb-1 font-medium">About</label>
            <textarea 
        
              
              placeholder=" About" 
              className="w-full  rounded-lg p-3 h-[200px] shadow-lg border border-gray-300  outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCommunityPopup;
