import React from 'react';
import introduction from '../Images/About Us/introduction.jpg';
import secondPhoto from '../Images/About Us/second_photo.jpg';
import checkmark from '../Images/About Us/check.png';
import handShaking from '../Images/About Us/hand_shaking.jpg';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 lg:py-32">
      {/* Main Title */}
      <div className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-16">
        We Are <a href="/" className="text-sky-500 hover:text-sky-600">LunaHotel.com</a>, But Who Are We?
      </div>

      {/* First Section: Introduction */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={introduction}
          alt="Introduction"
          className="h-80 w-full object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
        />
        <div className="flex flex-col space-y-6 text-lg text-gray-700 font-light">
          <p>
            Escape to a world of tranquility and luxury at <a href="/" className="underline text-sky-500">Luna Hotel</a>, where every moment is designed to enchant and delight. Nestled in breathtaking landscapes, Luna offers a sanctuary of comfort and sophistication.
          </p>
          <p>
            Step into a realm of timeless elegance where modern design meets classic charm. Our meticulously <a href="/" className="underline text-pink-500">designed rooms and suites offer unparalleled comfort</a>, each thoughtfully crafted to create a serene retreat.
          </p>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="mt-20 text-center text-3xl md:text-4xl font-bold mb-10">
        WHY US?
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ul className="space-y-6 text-lg text-gray-700 font-light">
          {["Unparalleled experience of elegance and comfort.", "World-class dining with gourmet and local delicacies.", "Dedicated staff providing personalized service.", "Serene spa offering rejuvenation and relaxation."].map((item, index) => (
            <li key={index} className="flex items-start">
              <img src={checkmark} alt="Checkmark" className="w-6 h-6 mr-3" /> {item}
            </li>
          ))}
        </ul>
        <img
          src={handShaking}
          alt="Hand Shaking"
          className="h-80 w-full object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Third Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
        <div className="flex flex-col space-y-6 text-lg text-gray-700 font-light">
          <p>
            Experience hospitality like never before at <a href="/" className="underline text-sky-500">Luna Hotel</a>. With top-tier services, premium amenities, and breathtaking views, we ensure a stay that exceeds expectations.
          </p>
          <p>
            From seamless check-ins to personalized room settings, every detail is tailored for an unforgettable guest experience.
          </p>
        </div>
        <img
          src={secondPhoto}
          alt="Second Photo"
          className="h-80 w-full object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AboutUs;
