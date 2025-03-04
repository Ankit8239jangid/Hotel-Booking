import React from 'react';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

const Info = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-20 lg:px-40 py-10">
      <div className="space-y-10 text-gray-800 font-medium">
        <AboutUs />
        <ContactUs />
      </div>
    </div>
  );
};

export default Info;
