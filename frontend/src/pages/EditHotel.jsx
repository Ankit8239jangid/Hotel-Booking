import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { hotelFacilities, hotelTypes } from '../config/hotel-options-congif';
import { useStatesForEditHotel } from '../hooks/Hooks';
import { toast_info_editHotel } from '../toast/Toast';
import { useToast } from '@chakra-ui/react';

const EditHotel = () => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    const { id } = useParams();
    const toast = useToast();
    const { hotel, setHotel } = useStatesForEditHotel();

    useEffect(() => {
        axios.get(`http://localhost:7000/my-hotels/edit-hotel/${id}`)
            .then(res => setHotel(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:7000/my-hotels/update-hotel/${id}`, hotel)
            .then(() => {
                toast_info_editHotel(toast);
                navigate("/");
            })
            .catch(err => console.error(err));
    };

    if (!hotel) return <div className="text-center text-xl font-semibold">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Your Hotel</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
                <label className="block">
                    <span className="text-gray-700 font-semibold">Name</span>
                    <input type="text" className="input-field" defaultValue={hotel.name} onChange={(e) => setHotel({ ...hotel, name: e.target.value })} />
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="block">
                        <span className="text-gray-700 font-semibold">City</span>
                        <input type="text" className="input-field" defaultValue={hotel.city} onChange={(e) => setHotel({ ...hotel, city: e.target.value })} />
                    </label>
                    <label className="block">
                        <span className="text-gray-700 font-semibold">Country</span>
                        <input type="text" className="input-field" defaultValue={hotel.country} onChange={(e) => setHotel({ ...hotel, country: e.target.value })} />
                    </label>
                </div>
                <label className="block">
                    <span className="text-gray-700 font-semibold">Description</span>
                    <textarea rows={5} className="input-field" defaultValue={hotel.description} onChange={(e) => setHotel({ ...hotel, description: e.target.value })} />
                </label>
                <label className="block">
                    <span className="text-gray-700 font-semibold">Price Per Night (€)</span>
                    <input type="number" min={1} className="input-field" defaultValue={hotel.pricePerNight} onChange={(e) => setHotel({ ...hotel, pricePerNight: e.target.value })} />
                </label>
                <label className="block">
                    <span className="text-gray-700 font-semibold">Star Rating</span>
                    <select className="input-field" defaultValue={hotel.starRating} onChange={(e) => setHotel({ ...hotel, starRating: e.target.value })}>
                        <option value="">Select Rating</option>
                        {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
                    </select>
                </label>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-500 transition">Update Hotel</button>
            </form>
        </div>
    );
};

export default EditHotel;

// Utility classes (TailwindCSS based)
const inputFieldStyles = "border border-gray-300 rounded-lg w-full p-2 text-gray-700 focus:ring-2 focus:ring-blue-400";
const inputField = document.createElement('style');
inputField.innerHTML = `.input-field { ${inputFieldStyles} }`;
document.head.appendChild(inputField);
