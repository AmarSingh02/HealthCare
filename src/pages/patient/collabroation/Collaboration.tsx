import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import collabImage1 from '../../../assets/images/collabration1_img.png';
import { Link } from 'react-router-dom';

const Collaboration = () => {
    const collabroationList = [
        {
            id: 1,
            title: 'INC',
            desc: 'Cancer Research and prevention data',
            websiteLink: 'https://institutnationalducancer.lu/',
            imageUrl: collabImage1
        },
        {
            id: 1,
            title: 'INC',
            desc: 'Cancer Research and prevention data',
            websiteLink: 'https://institutnationalducancer.lu/',
            imageUrl: collabImage1
        },
        {
            id: 1,
            title: 'INC',
            desc: 'Cancer Research and prevention data',
            websiteLink: 'https://institutnationalducancer.lu/',
            imageUrl: collabImage1
        },
        {
            id: 1,
            title: 'INC',
            desc: 'Cancer Research and prevention data',
            websiteLink: 'https://institutnationalducancer.lu/',
            imageUrl: collabImage1
        },
         {
            id: 1,
            title: 'INC',
            desc: 'Cancer Research and prevention data',
            websiteLink: 'https://institutnationalducancer.lu/',
            imageUrl: collabImage1
        }
    ]

    return (
        <div className='p-4 mt-4'>
            <Breadcrumbs />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
  {collabroationList.map((item, index) => (
    <div key={index} className="shadow-md p-4 bg-white rounded-2xl text-center mt-4">
      <img src={item.imageUrl} alt={item.title} className="mx-auto mb-2" />
      <h3 className="font-semibold text-lg">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.desc}</p>
      <a
        href={item.websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline text-sm break-all"
      >
        {item.websiteLink}
      </a>
    </div>
  ))}
</div>

        </div>
    )
}

export default Collaboration
