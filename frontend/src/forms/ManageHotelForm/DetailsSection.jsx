import React from 'react';
import { useFormContext } from 'react-hook-form';

const DetailsSection = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add Hotel</h2>

      {/* Hotel Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Hotel Name</label>
        <input 
          type="text" 
          className="border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          {...register('name', { required: 'This field is required' })} 
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      {/* City & Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* City */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">City</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            {...register('city', { required: 'This field is required' })} 
          />
          {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
        </div>

        {/* Country */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Country</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            {...register('country', { required: 'This field is required' })} 
          />
          {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1">Description</label>
        <textarea 
          rows={4} 
          className="border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" 
          {...register('description', { required: 'This field is required' })} 
        />
        {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
      </div>

      {/* Price Per Night */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1">Price Per Night ($)</label>
        <input 
          type="number" 
          min={1} 
          className="border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          {...register('pricePerNight', { required: 'This field is required' })} 
        />
        {errors.pricePerNight && <span className="text-red-500 text-sm">{errors.pricePerNight.message}</span>}
      </div>

      {/* Star Rating */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1">Star Rating</label>
        <select 
          className="border border-gray-300 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          {...register('starRating', { required: 'This field is required' })} 
        >
          <option value="">Select a Rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
          ))}
        </select>
        {errors.starRating && <span className="text-red-500 text-sm">{errors.starRating.message}</span>}
      </div>
    </div>
  );
};

export default DetailsSection;
