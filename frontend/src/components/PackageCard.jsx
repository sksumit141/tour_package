// client/src/components/PackageCard.jsx
import { FaStar, FaCalendarAlt } from 'react-icons/fa';

export const PackageCard = ({ tourPackage }) => {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
      <img 
        className="w-full h-64 object-cover"  // Increased height from h-48 to h-64
        src={tourPackage.image} 
        alt={tourPackage.title} 
      />
      <div className="p-6">  {/* Increased padding from p-4 to p-6 */}
        <h3 className="text-2xl font-bold mb-3">{tourPackage.title}</h3>  {/* Increased text size */}
        <div className="flex items-center mb-3">
          <FaStar className="text-yellow-500 text-xl mr-2" /> 
          <span className="text-lg">{tourPackage.rating}</span>  
        </div>
        <div className="flex items-center mb-5">
          <FaCalendarAlt className="text-gray-500 text-xl mr-3" /> 
          <span className="text-gray-600 text-lg">{tourPackage.duration}</span>  
        </div>
        <p className="text-blue-500 text-xl font-semibold mb-5">${tourPackage.price}</p>  
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-lg w-full"> 
          Book Now
        </button>
      </div>
    </div>
  );
};