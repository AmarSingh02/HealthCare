import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ClipLoader size={50} color="#4A90E2" />
        </div>
      ) : (
        <div className="text-center mt-10 text-lg font-medium"></div>
      )}
    </>
  );
};

export default Loader;
