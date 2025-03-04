// src/pages/MyHotel.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useStatesForMyHotel } from "../hooks/Hooks";


// ICONS
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

import SearchBar from "./SearchBar";

const MyHotels = () => {
  axios.defaults.withCredentials = true;

  const { hotels, setHotels, searchResults, setSearchResults } = useStatesForMyHotel();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:7000/my-hotels")
      .then((response) => {
        setHotels(response.data);
        setSearchResults(response.data); // Initially, show all hotels
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch hotels. Please try again later.");
        setLoading(false);
      });
  }, [setHotels]);

  // Search Function
  const handleSearch = ({ name, city, country, starRating }) => {
    let filteredHotels = hotels;

    if (name) {
      filteredHotels = filteredHotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (city) {
      filteredHotels = filteredHotels.filter((hotel) =>
        hotel.city.toLowerCase().includes(city.toLowerCase())
      );
    }
    if (country) {
      filteredHotels = filteredHotels.filter((hotel) =>
        hotel.country.toLowerCase().includes(country.toLowerCase())
      );
    }
    if (starRating) {
      filteredHotels = filteredHotels.filter((hotel) => hotel.starRating == starRating);
    }

    setSearchResults(filteredHotels);
  };

  return (
    <div className="pl-10 lg:pl-20 pr-10 lg:pr-20 mt-10">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Your Hotels</h1>
        <Link
          to="/add-hotel"
          className="bg-blue-600 text-white text-xl font-semibold py-2 px-6 rounded-full hover:bg-blue-500 hover:scale-105 transition-all duration-300"
        >
          Add Hotel
        </Link>
      </div>

      {/* Search Bar Component */}
      <SearchBar onSearch={handleSearch} />

      {/* Loading State */}
      {loading && <p className="text-lg text-gray-700">Loading hotels...</p>}

      {/* Error Message */}
      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {/* No Hotels Found */}
      {!loading && searchResults.length === 0 && <p className="text-gray-700">No hotels found.</p>}

      {/* Hotels List */}
      {searchResults.map((hotel) => (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6" key={hotel._id}>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-2xl text-gray-800">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.description}</p>

            {/* Hotel Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
              <div className="flex items-center text-gray-700">
                <BsMap className="mr-2" />
                <span>{hotel.city}, {hotel.country}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BsBuilding className="mr-2" />
                <span>{hotel.type}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BiMoney className="mr-2" />
                <span>€ {hotel.pricePerNight} per night</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BiHotel className="mr-2" />
                <span>{hotel.adultCount} Adults, {hotel.childCount} Children</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BiStar className="mr-2" />
                <span>{hotel.starRating} star rating</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyHotels;
