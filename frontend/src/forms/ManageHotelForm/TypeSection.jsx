import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-congif";
import React from "react";

const TypeSection = () => {
  const { register, watch, formState: { errors } } = useFormContext();
  const typeWatch = watch("type"); // Track selected type

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-gray-800">Type</h2>

      {/* Grid Layout for Types */}
      <div className="grid grid-cols-5 gap-2">
        {hotelTypes.map((type, index) => (
          <label
            key={index}
            className={`cursor-pointer text-sm rounded-full px-4 py-2 font-semibold transition-all duration-300 ease-in-out ${
              typeWatch === type
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "Please select a hotel type." })}
              className="hidden"
              aria-label={`Select ${type}`}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      {/* Error Message */}
      {errors.type && (
        <span className="text-red-600 text-sm font-bold mt-2 block">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
