// src/components/LoadingSkeleton.jsx
export const LoadingSkeleton = ({ count = 3 }) => {
    return (
      <div className="flex flex-wrap justify-center">
        {[...Array(count)].map((_, index) => (
          <div key={index} className="m-4 w-80">
            <div className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-t-lg"></div>
              <div className="p-4 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-10 bg-gray-200 rounded w-32 mt-4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };