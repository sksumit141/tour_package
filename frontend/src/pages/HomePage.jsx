import { useQuery } from '@tanstack/react-query';
import { fetchDestinations, fetchTopSellingPackages } from '../api/api';
import { DestinationCard } from '../components/DestinationCard';
import { PackageCard } from '../components/PackageCard';
import { LoadingSkeleton } from '../components/LoadingSkeleton';
import { AdvantagesSection } from '../components/AdvantagesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

export const HomePage = () => {
  const destinationsQuery = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations
  });

  const packagesQuery = useQuery({
    queryKey: ['topSellingPackages'],
    queryFn: fetchTopSellingPackages
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Discover Your Next Adventure</h1>

      {/* Destinations Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Explore Most Popular Destinations</h2>
        {destinationsQuery.isLoading ? (
          <LoadingSkeleton count={3} />
        ) : destinationsQuery.isError ? (
          <p className="text-red-500">Error loading destinations</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinationsQuery.data?.map((destination) => (
              <DestinationCard key={destination._id} destination={destination} />
            ))}
          </div>
        )}
      </section>

      {/* Advantages Section */}
      <AdvantagesSection />

      {/* Packages Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Top Selling Tour Packages</h2>
        {packagesQuery.isLoading ? (
          <LoadingSkeleton count={3} />
        ) : packagesQuery.isError ? (
          <p className="text-red-500">Error loading packages</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packagesQuery.data?.map((tourPackage) => (
              <PackageCard key={tourPackage._id} tourPackage={tourPackage} />
            ))}
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
};
