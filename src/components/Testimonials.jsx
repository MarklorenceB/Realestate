import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The team's dedication and market knowledge made our home selling experience seamless. They got us top dollar!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Professional, responsive, and truly cared about finding us the right home. Couldn't ask for better service.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      text: "Their expertise in investment properties helped us build our portfolio with confidence. Highly recommend!",
      rating: 5,
    },
  ];
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it—hear from those we've helped.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
