import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import headerImage from '../assets/nathan-dumlao-q3YZ4g7j9yc-unsplash.jpg'; // Local background image

const Header = () => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={headerImage}
          alt="People enjoying vacation"
          className="w-full h-full object-cover blur-xs"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl md:text-2xl mb-10 animate-fadeIn delay-100">
          Choose from our curated experiences, customized for every kind of traveler
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold flex items-center mx-auto animate-fadeIn delay-200 transition-all duration-300 transform hover:scale-105">
          Book Now
          <FaArrowRight className="ml-3" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scrollIndicator"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
