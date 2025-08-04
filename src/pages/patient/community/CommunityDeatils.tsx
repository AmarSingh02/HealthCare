import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import RichTextEditor from '../../../components/RichTextEditor'
import Heading from '../../../components/Heading'
import { useNavigate } from 'react-router-dom'


const CommunityDeatils = () => {

  // const createCommunityPost


const navigate=useNavigate();
 const handleBack = () => {
    navigate(-1); // Go back to previous page
  };
  
  return (
    <div className='p-5 mt-4'>

        <Breadcrumbs/>
     

     <div className="flex justify-between mb-4">


     <Heading heading='Community'/>
     <div>
 <button 
  className='bg-red-500 text-white rounded-lg py-2 px-5 text-md curosr-pointer'
  onClick={handleBack}
>
  Back
</button>
     </div>
   
</div>


<div className='shadow-md rounded-2xl p-4 bg-white w-[100%]'>

<div className="flex justify-between ">
<div className=' w-[100%] mx-10 '>
 <RichTextEditor/>
 </div>
<div className='py-8 px-10'>
   <button 
  className='bg-blue-500 text-white rounded-lg py-2 px-5 text-md cursor-pointer'

>
  Post
</button>
</div>

</div>
  
</div>
 


    </div>
  )
}

export default CommunityDeatils
