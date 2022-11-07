import React, { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const AboutFaq = () => {
    return (
        <div class="space-y-4 lg:mr-3 w-full">
            <Item className="mr-5" title="18 years experience!">
              I have been working for more than 18 years as a electrician. I can fix any phone devices.
            </Item>
            <Item className="mr-5" title="Price?">
              Price totally depends on the problem. I mean what kind of parts do you need to fix your problem. It also depends on the phone brand.
            </Item>
            <Item className="mr-5" title="Is there any guarantee or warrenty?">
              Yeah we provide guarantee and also warrenty. So don't worry. If you will face any problem within 6 months then just come to me. I will fix it without payment.
            </Item>
            <Item className="mr-5" title="How long do you need?">
              It is totally depends on the queue. So don't waste your time and take an appoinment. To know more, please checkout our customer reviews.
            </Item>
          </div>
    );
  };

export default AboutFaq;