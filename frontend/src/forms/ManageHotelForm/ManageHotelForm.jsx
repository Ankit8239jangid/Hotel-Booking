import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import axios from 'axios';

// Sections
import DetailsSection from './DetailsSection';
import TypeSection from './TypeSection';
import FacilitiesSection from './FacilitiesSection';
import GuestsSection from './GuestsSection';
import ImagesSection from './ImagesSection';

import { useNavigate } from 'react-router-dom';
import { toast_info_hotel_created, toast_info_hotel_not_created } from '../../toast/Toast';
import { useToast } from '@chakra-ui/react';

const ManageHotelForm = () => {
    const navigate = useNavigate();
    const formMethods = useForm();
    const toast = useToast();
    const { handleSubmit } = formMethods;

    axios.defaults.withCredentials = true;

    const onSubmit = handleSubmit(async (formDataJson) => {
        try {
            const formData = new FormData();
            formData.append('name', formDataJson.name);
            formData.append('city', formDataJson.city.toString());
            formData.append('country', formDataJson.country);
            formData.append('type', formDataJson.type);
            formData.append('description', formDataJson.description);
            formData.append('pricePerNight', formDataJson.pricePerNight.toString());
            formData.append('starRating', formDataJson.starRating.toString());
            formData.append('adultCount', formDataJson.adultCount.toString());
            formData.append('childCount', formDataJson.childCount.toString());

            if (formDataJson.facilities?.length > 0) {
                formDataJson.facilities.forEach((facility, index) => {
                    formData.append(`facilities[${index}]`, facility);
                });
            }

            if (formDataJson.imageFiles?.length > 0) {
                Array.from(formDataJson.imageFiles).forEach((imageFile) => {
                    formData.append('imageFiles', imageFile);
                });
            }

            await axios.post('http://localhost:7000/my-hotels', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            toast_info_hotel_created(toast);
            navigate('/');
        } catch (error) {
            toast_info_hotel_not_created(toast, error);
        }
    });

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={onSubmit} className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Register Your Hotel</h2>
                
                {/* Sections */}
                <div className="space-y-6">
                    <DetailsSection />
                    <TypeSection />
                    <FacilitiesSection />
                    <GuestsSection />
                    <ImagesSection />
                </div>

                {/* Save Button */}
                <div className="flex justify-end mt-8">
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-all hover:bg-blue-500 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Save
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};

export default ManageHotelForm;
