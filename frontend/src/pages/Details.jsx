import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { BiArrowFromRight } from "react-icons/bi";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

// State Management
import { useStateForViews } from "../hooks/Hooks";
import { useToast } from "@chakra-ui/react";
import { toast_info_saved } from "../toast/Toast";

// Redux
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Details = () => {
  const {
    showTooltip,
    setShowTooltip,
    showTooltip_2,
    setShowTooltip_2,
    showTooltip_3,
    setShowTooltip_3,
    loading,
    setLoading,
    openedDetail,
    isOpenedDetails,
  } = useStateForViews();

  const hotel = useSelector((state) => state.hotel.hotels[0]);

  const toast = useToast();
  const Save = () => {
    toast_info_saved(toast);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-6 md:px-20 mt-10">
     

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold font-serif text-gray-900">
          HOTEL - {hotel.name}
        </h1>
        <Link to="/" className="mt-6 lg:mt-0">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-green-700 transition-transform duration-300">
            Home <BiArrowFromRight className="w-6 h-6" />
          </button>
        </Link>
      </div>

      {/* Description Section */}
      <div className="border-b-2 border-gray-200 py-6 mt-8">
        <p className="text-lg text-gray-800 font-medium">{hotel.description}</p>
      </div>

      {/* Additional Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Tooltip for Adult and Child Count */}
        <div
          className="relative group"
          onMouseEnter={() => setShowTooltip_2(true)}
          onMouseLeave={() => setShowTooltip_2(false)}
        >
          <span className="text-lg font-semibold text-gray-700">
            A - {hotel.adultCount} | C - {hotel.childCount}
          </span>
          {showTooltip_2 && (
            <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white rounded-md shadow-lg opacity-90">
              Adult: {hotel.adultCount} | Child: {hotel.childCount}
            </div>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex items-center text-lg text-gray-700">
          <FaPhoneAlt className="mr-3 text-xl text-blue-500" />
          <a href="tel:+1234567890" className="underline hover:text-blue-600">
            123-456-7890
          </a>
        </div>

        {/* Location Section */}
        <div className="flex items-center text-lg text-gray-700">
          <FaLocationArrow className="mr-3 text-xl text-blue-500" />
          <span>
            {hotel.country},{" "}
            <a
              href={`https://www.google.com/maps?q=${hotel.city}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              {hotel.city}
            </a>
          </span>
        </div>

        {/* Tooltip for Price Per Night */}
        <div
          className="relative group"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <span className="text-lg font-semibold text-gray-700">
            PPR: {hotel.pricePerNight} €
          </span>
          {showTooltip && (
            <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white rounded-md shadow-lg opacity-90">
              Currency: Euro
              <br />
              Price Per Night: {hotel.pricePerNight} €
            </div>
          )}
        </div>

        {/* Tooltip for Facilities */}
        <div
          className="relative group"
          onMouseEnter={() => setShowTooltip_3(true)}
          onMouseLeave={() => setShowTooltip_3(false)}
        >
          <span className="text-lg font-semibold text-gray-700">Facilities</span>
          {showTooltip_3 && (
            <div className="absolute left-0 mt-2 p-2 bg-gray-800 text-white rounded-md shadow-lg opacity-90">
              <ul className="space-y-2">
                {hotel.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="text-lg font-semibold text-gray-700">
          <span>Star Rating: {hotel.starRating}</span>
        </div>
        <div className="text-lg font-semibold text-gray-700">
          <span>Type: {hotel.type}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
