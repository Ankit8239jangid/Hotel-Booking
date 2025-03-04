import React from 'react';
import checkmark from '../Images/About Us/check.png';
import hand_shaking from '../Images/About Us/hand_shaking.jpg';

const Info_Prefer = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        WHY US?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Benefits List */}
        <ul className="space-y-4 text-gray-800">
          {[
            "At Luna Hotel, we pride ourselves on offering an unparalleled experience of elegance and comfort. From meticulously designed rooms to luxurious amenities, every detail is crafted to ensure your stay is nothing short of extraordinary.",
            "Indulge in a culinary journey like no other at Luna Hotel. Our world-class restaurants and bars offer a diverse range of flavors, from gourmet dishes to local specialties. Discover a symphony of tastes that will tantalize your senses.",
            "Our dedicated team is committed to providing you with the highest level of personalized service. From the moment you arrive to the time of your departure, we are here to cater to your every need, ensuring a seamless and memorable stay.",
            "Escape the hustle and bustle of everyday life at our serene spa. Immerse yourself in a world of relaxation and rejuvenation with our curated selection of treatments, designed to refresh both body and mind."
          ].map((text, index) => (
            <li key={index} className="flex items-start">
              <img src={checkmark} alt="Checkmark" className="w-6 h-6 mr-3" />
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={hand_shaking}
            alt="Hand Shaking"
            className="w-full md:w-80 h-auto rounded-lg object-cover animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Info_Prefer;
