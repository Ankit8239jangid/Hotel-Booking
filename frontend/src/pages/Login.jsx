import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useStatesForLogin } from "../hooks/Hooks";
import { toast_info_login } from "../toast/Toast";

const Login = () => {
  const { email, setEmail, password, setPassword } = useStatesForLogin();
  const toast = useToast();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  Axios.defaults.withCredentials = true;

  const onSubmit = async () => {
    try {
      await Axios.post("http://localhost:7000/auth/login", { email, password });
      toast_info_login(toast);
      navigation("/home");
    } catch (err) {
      console.error(`Login error: ${err}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md flex flex-col gap-6 font-semibold"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Log in</h2>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium">Email</label>
          <input
            type="email"
            className="border rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            {...register("email", { required: "Email is required" })}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium">Password</label>
          <input
            type="password"
            className="border rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`py-2 rounded-lg font-bold text-lg transition duration-300 ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>

          <div className="text-center">
            <Link to="/users/register" className="text-blue-600 text-sm hover:text-blue-800 transition duration-300">
              Don't have an account? Sign up here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
