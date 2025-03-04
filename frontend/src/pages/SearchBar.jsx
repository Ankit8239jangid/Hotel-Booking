import React from "react";
import { useStatesForSearchBar } from "../hooks/Hooks";
import { BiSearch, BiStar, BiMap, BiWorld } from "react-icons/bi";
import { toast_info_search_b } from '../toast/Toast.js';
import { useToast } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
  const { name, setName, city, setCity, country, setCountry, starRating, setStarRating } =
    useStatesForSearchBar();
    const toast = useToast();

  const handleSearchClick = () => {
    onSearch({ name, city, country, starRating });
    toast_info_search_b(toast);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 lg:p-8 flex md:flex-row flex-col gap-4 items-center justify-between">
      {/* Hotel Name */}
      <div className="relative flex-1">
        <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Hotel Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* City */}
      <div className="relative flex-1">
        <BiMap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Country */}
      <div className="relative flex-1">
        <BiWorld className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Star Rating */}
      <div className="relative flex-1">
        <BiStar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="number"
          placeholder="Star Rating"
          value={starRating}
          onChange={(e) => setStarRating(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearchClick}
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300"
      >
        <BiSearch className="mr-2 text-lg" /> Search
      </button>
    </div>
  );
};

export default SearchBar;
