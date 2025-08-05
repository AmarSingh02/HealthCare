import React, { useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import RichTextEditor from '../../../components/RichTextEditor'
import Heading from '../../../components/Heading'
import { useNavigate } from 'react-router-dom'
import IMG1 from '../../../assets/images/communityDetailimg.png'
import { FaRegUserCircle } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import NestedComments from '../../../components/NestedComments'
const CommunityDeatils = () => {


const [posts, setPosts] = useState([
    {
      id: 1,
      userName: 'Sarath',
      title: 'Embracing Gratitude: Finding Strength in Every Moment!',
      image: IMG1,
      likes: 0,
      liked: false,
    },
    {
      id: 2,
      title: 'Embracing Gratitude: Finding Strength in Every Moment!',
      image: IMG1,
      userName: 'Amit Nishad',
      likes: 0,
      liked: false,
    }
  ]);

  const toggleLikes = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id
          ? {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked
            }
          : post
      )
    );
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className='p-5 mt-4'>
      <Breadcrumbs />
      <div className="flex justify-between mb-4">

        <Heading heading='Community' />
        <div>
          <button
            className='bg-red-500 text-white rounded-lg py-2 px-5 text-md curosr-pointer'
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>

      <div className='shadow-md rounded-2xl p-4 bg-white  w-[70%]'>

        <div className="flex justify-between ">
          <div className=' w-[100%] mx-10 '>
            <RichTextEditor />
          </div>
          <div className='py-8 px-10'>
            <button
              className='bg-blue-500 text-white rounded-lg py-2 px-5 text-md cursor-pointer'

            >
              Post
            </button>
          </div>
        </div>


        <div className='p-10'>
          {posts.map((item) => (
            <div key={item.id} className='mb-10'>
              <div className='flex gap-3 mb-4'>
                <FaRegUserCircle className="text-3xl" />
                <p className="text-gray-500 text-2xl font-bold">{item.userName}</p>
              </div>

              <h3>{item.title}</h3>
              <img src={item.image} alt="" loading='lazy' className='mb-4' />

             <div
  className="flex items-center gap-2 cursor-pointer w-fit mb-2"
  onClick={() => toggleLikes(item.id)}
>
  <AiOutlineLike
    className={`text-2xl ${item.liked ? "text-blue-500" : "text-gray-500"}`}
  />
  <span>{item.likes}</span>
</div>

               
              {/* comments component */}
                {/* <NestedComments/> */}
            </div>
          ))}
        </div>
      </div>
      </div>

  )
}

export default CommunityDeatils
