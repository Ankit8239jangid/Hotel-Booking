import React from "react";
import { useFormContext } from "react-hook-form";

const GuestsSection = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-6">Guests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {/* Adults Input */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold">Adults</label>
          <input
            type="number"
            className="border rounded w-full py-2 px-3 font-normal focus:ring-blue-500 focus:border-blue-500"
            min={1}
            {...register("adultCount", {
              required: "Please enter the number of adults",
              min: { value: 1, message: "At least 1 adult is required" },
            })}
          />
          {errors.adultCount && (
            <span className="text-red-500 text-sm font-medium mt-1">
              {errors.adultCount.message}
            </span>
          )}
        </div>

        {/* Children Input */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold">Children</label>
          <input
            type="number"
            className="border rounded w-full py-2 px-3 font-normal focus:ring-blue-500 focus:border-blue-500"
            min={0}
            {...register("childCount", {
              required: "Please enter the number of children",
              min: { value: 0, message: "Children count cannot be negative" },
            })}
          />
          {errors.childCount && (
            <span className="text-red-500 text-sm font-medium mt-1">
              {errors.childCount.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestsSection;
