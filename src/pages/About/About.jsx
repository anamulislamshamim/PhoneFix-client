import React from 'react';
import AboutFaq from './AboutFaq';

export const About = () => {
    return (
      <div className="relative flex flex-col-reverse py-16 lg:py-20 bg-white lg:flex-col">
        <div className='md:px-24 lg:w-1/2'>
            <AboutFaq />
        </div>
        
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    );
  };

export default About;