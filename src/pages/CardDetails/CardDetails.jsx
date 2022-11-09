import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServiceReviews from '../SingleServiceReviews/SingleServiceReviews';

export const CardDetails = () => {
  const service = useLoaderData();
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-400">
                Service Details
              </p>
            </div>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={ service.picture }
              alt=""
            />
          </div>
          <h2 className='text-3xl font-semibold text-left mb-3 text-gray-800'>Fix the Hardware</h2>
          <p className="text-gray-800 font-semibold">
           { service.description }
          </p>
          <p className='text-left text-2xl text-gray-800'>
            { service.price }
          </p>
        </div>
      </div>
      <SingleServiceReviews id={ service._id } />
    </>
  );
};

export default CardDetails;