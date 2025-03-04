import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-congif";
import React from "react";

const FacilitiesSection = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-6">Facilities</h2>

      {/* Facilities Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {hotelFacilities.map((facility, index) => (
          <label key={index} className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => facilities?.length > 0 || "At least one facility is required",
              })}
              className="w-4 h-4 accent-blue-500"
            />
            {facility}
          </label>
        ))}
      </div>

      {/* Error Message */}
      {errors.facilities && (
        <span className="text-red-500 text-sm font-semibold mt-2 block">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
