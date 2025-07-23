import React from 'react';

const Comment = () => {
  return (
    <div className="p-10">
      <h4 className='mb-3'>Comment</h4>
      <div className="relative w-full">
        <textarea
          placeholder="Add Comment"
          className="w-full h-40 bg-white shadow-md rounded-xl p-4 outline-none resize-none pr-20"
        ></textarea>
        <button
          className="absolute top-2 cursor-pointer right-4 px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Comment;
