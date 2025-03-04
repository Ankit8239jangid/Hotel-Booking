import React from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { toast_info_register_failed, toast_info_register_success } from '../toast/Toast';

const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await Axios.post('http://localhost:7000/users/register', data);
      toast_info_register_success(toast);
      navigate("/auth/login");
    } catch (error) {
      console.error("Registration error:", error);
      toast_info_register_failed(toast);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-6 font-semibold"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create an Account
        </h2>

        {/* First Name & Last Name */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full">
            <label className="text-gray-700 text-sm font-medium">First Name</label>
            <input
              className="border rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('firstName', { required: 'This field is required' })}
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
          </div>

          <div className="flex flex-col w-full">
            <label className="text-gray-700 text-sm font-medium">Last Name</label>
            <input
              className="border rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('lastName', { required: 'This field is required' })}
            />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium">Email</label>
          <input
            type="email"
            className="border rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('email', { required: 'This field is required' })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium">Password</label>
          <input
            type="password"
            className="border rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            className="border rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('confirmPassword', {
              validate: (val) => {
                if (!val) return 'This field is required';
                if (val !== watch('password')) return 'Your passwords do not match';
              },
            })}
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Create an Account
          </button>

          <div className="text-center">
            <label className="text-blue-600 text-sm">
              <Link to="/auth/login" className="hover:text-blue-800">
                Do you have an account? Login here
              </Link>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
