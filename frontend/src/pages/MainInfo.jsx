import React from "react";
import introduction from "../Images/About Us/introduction.jpg";
import second_photo from "../Images/About Us/second_photo.jpg";

const MainInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Main Title */}
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-12">
        We Are{" "}
        <a href="/" className="text-sky-500 hover:text-sky-600 transition-colors">
          LunaHotel.com
        </a>
        , But Who Are We?
      </h1>

      {/* First Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={introduction}
          alt="Luna Hotel entrance with luxurious interiors"
          className="h-80 w-full object-cover rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div className="flex flex-col space-y-6 mt-6 md:mt-0">
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Discover an oasis of elegance and comfort at{" "}
            <a href="/" className="underline text-sky-500 hover:text-sky-600">
              Luna Hotel
            </a>
            . Whether you're here for a peaceful getaway or a luxurious stay, we offer a unique blend of modern sophistication and warm hospitality.
          </p>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Our beautifully{" "}
            <a href="/" className="underline text-pink-500 hover:text-pink-600">
              designed rooms and suites
            </a>{" "}
            offer unmatched relaxation, blending contemporary style with classic elegance.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
        <div className="flex flex-col space-y-6 md:order-2">
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            At Luna Hotel, we redefine luxury with world-class amenities and personalized experiences. Every corner of our hotel is crafted to provide an unforgettable stay.
          </p>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Enjoy breathtaking views, rejuvenating spa treatments, and exquisite dining options—all designed to cater to your every need.
          </p>
        </div>
        <img
          src={second_photo}
          alt="Luna Hotel's premium suite with scenic views"
          className="h-80 w-full object-cover rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default MainInfo;
