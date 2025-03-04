import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center py-16 px-6 sm:px-12 lg:px-20">
            <section className="bg-white rounded-lg shadow-lg p-10 max-w-3xl w-full">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h2>
                <p className="text-lg text-center text-gray-600 mb-8">
                    Have a question or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="name@example.com" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input 
                            type="text" 
                            id="subject" 
                            className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="How can we assist you?" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                        <textarea 
                            id="message" 
                            rows="5" 
                            className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="Write your message here..."
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-blue-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ContactUs;
