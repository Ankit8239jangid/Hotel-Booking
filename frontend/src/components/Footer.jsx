import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-500/90 py-3  w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="text-2xl text-white font-bold tracking-tight">
          LunaHolidays.com
        </span>
        <div className="text-white font-bold tracking-tight flex space-x-6">
          <p className="cursor-pointer hover:underline transition duration-200">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:underline transition duration-200">
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
