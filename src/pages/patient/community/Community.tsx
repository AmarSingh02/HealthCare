import React, { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import AddCommunityPopup from '../../../components/addCommunityPopup';

import imageURL from '../../../assets/images/communityImg.png'
import { useNavigate } from 'react-router-dom';


const Community = () => {

  const communityData = [
    {
      id: 1,
      image: imageURL,
      title: 'community1',
      desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum excepturi deserunt. Quo ipsam rem a officia commodi '
    },
    {
      id: 2,
      image: imageURL,
      title: 'community2',
      desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos assumenda, quia iure esse quam temporibus odio, repellendus praesentium! Perferendis, nobis. '
    },
    {
      id: 3,
      image: imageURL,
      title: 'community1',
      desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum excepturi deserunt. Quo ipsam rem a officia commodi '
    },
    {
      id: 4,
      image: imageURL,
      title: 'community2',
      desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos assumenda, quia iure esse quam temporibus odio, repellendus praesentium! Perferendis, nobis. '
    },
    {
      id: 1,
      image: imageURL,
      title: 'community1',
      desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum excepturi deserunt. Quo ipsam rem a officia commodi '
    },
    {
      id: 2,
      image: imageURL,
      title: 'community2',
      desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos assumenda, quia iure esse quam temporibus odio, repellendus praesentium! Perferendis, nobis. '
    },


  ]

  const navigate=useNavigate();


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="p-10">
      <Breadcrumbs />

      <div className="flex justify-between items-center mb-4 w-full h-full">
        <h2 className="text-xl font-semibold">Community</h2>

        {/* Plus Button */}
        <button
          className="text-xl cursor-pointer bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-500 transition-colors"
          onClick={handleOpenPopup}
        >
          +
        </button>
      </div>

      
      <div className='grid grid-cols-4 gap-[30px]'>
        {
        communityData.map((item, index)=>(
          <>
  
          <div key={index} className="rounded-xl" style={{ backgroundImage: `url(${item.image})`  }} onClick={() => navigate(`/communityDe/${item.id}`)}
>
<div className='shadow-md p-4 bg-white relative mt-40 rounded-xl'>


          <h4> {item.title}</h4>
          <p>{item.desc.substring(0, 100) + '...'}</p> 

          <div className="flex justify-between mt-10" >
            <button className='bg-blue-600 text-white rounded-3xl py-1 px-5 cursor-pointer'>Join</button>
            <button>Peoples</button>
          </div>
          </div>

          </div>
          </>
        ))
        }
      </div>


      <AddCommunityPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default Community;
