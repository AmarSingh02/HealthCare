
import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../../components/Breadcrumbs';
import Comment from '../../../components/comment';

const EducationDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-10">
      <Breadcrumbs/>
     
<h1 className="text-2xl font-bold mb-4 ">Education Detail</h1>
      <p>This is the detail page for education blog ID: <strong>{id}</strong></p>



      <Comment/>
    </div>
  );
};

export default EducationDetails;
