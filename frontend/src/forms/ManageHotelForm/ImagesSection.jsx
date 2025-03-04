import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const ImagesSection = () => {
  const { register, formState: { errors } } = useFormContext();
  const [selectedFiles, setSelectedFiles] = useState([]);

  return (
    <div>
      <h2 className="text-2xl mt-6 font-bold mb-3 text-gray-800">Images</h2>

      <div className="border rounded p-4 flex flex-col gap-4">
        {/* Label for Accessibility */}
        <label className="text-gray-700 text-sm font-semibold">
          Upload Images (Max 6)
        </label>

        {/* File Input */}
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-gray-700 font-normal focus:ring-blue-500 focus:border-blue-500"
          {...register("imageFiles", {
            validate: (value) => {
              const files = value?.length ? value : []; // Ensure value exists
              if (files.length === 0) return "At least one image should be added.";
              if (files.length > 6) return "Total number of images cannot be more than 6.";
              return true;
            },
            onChange: (e) => setSelectedFiles(Array.from(e.target.files)), // Track selected files
          })}
        />

        {/* Display selected file count */}
        {selectedFiles.length > 0 && (
          <span className="text-gray-600 text-sm font-medium">
            {selectedFiles.length} image(s) selected
          </span>
        )}

        {/* Error message */}
        {errors.imageFiles && (
          <span className="text-red-500 text-sm font-bold">
            {errors.imageFiles.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImagesSection;
