import { FaMapMarkerAlt } from 'react-icons/fa';

export const DestinationCard = ({ destination }) => {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
      <img 
        className="w-full h-64 object-cover"  // Increased height from h-48 to h-64
        src={destination.image} 
        alt={destination.name} 
      />
      <div className="p-6">  
        <h3 className="text-2xl font-bold mb-3">{destination.name}</h3>  
        <p className="text-gray-600 text-lg mb-4">{destination.description}</p> 
        <p className="text-xl font-semibold mb-5">From ${destination.startingPrice}</p>  
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center text-lg">  
          <FaMapMarkerAlt className="mr-3 text-xl" /> 
          Explore
        </button>
      </div>
    </div>
  );
};
