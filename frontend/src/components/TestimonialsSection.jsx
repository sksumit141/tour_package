// client/src/components/TestimonialsSection.jsx
export const TestimonialsSection = () => {
    const testimonials = [
      {
        quote: "You can easily read the current profile about our customers or customers who are enjoying our growth in our business.",
        author: "RECIPES / PERFORMANCE"
      },
      {
        quote: "Your company works in tremendous financial support. A customer is always looking for more than one customer depending on whether it is important to us to provide a good way to achieve this.",
        author: "RECIPES / PERFORMANCE"
      },
      {
        quote: "You can easily read the above set of tools used to create solutions to improve our customer satisfaction. We will also use our products to help you improve our customer satisfaction with the needs of customers.",
        author: "RECIPES / PERFORMANCE"
      }
    ];
  
    return (
      <section className="my-16 bg-gray-50 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <span className="font-medium">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };