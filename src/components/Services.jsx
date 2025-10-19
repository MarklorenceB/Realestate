import React from "react";
import { useState } from "react";
import { Home, TrendingUp, Award, Search } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Commercial & Residential",
      description:
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Find Your Dream Home",
      description:
        "From cozy condos to luxury estates, we have the expertise and connections to find the perfect property that fits your lifestyle and budget.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real Estate Done Right",
      description:
        "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rely on Expertise",
      description:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From market analysis to closing day, we provide end-to-end support
            for all your real estate needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => setActiveService(idx)}
              className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeService === idx
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl transform scale-105"
                  : "bg-gray-50 hover:bg-gray-100 text-gray-900"
              }`}
            >
              <div
                className={`mb-4 ${
                  activeService === idx ? "text-white" : "text-blue-600"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p
                className={`${
                  activeService === idx ? "text-white/90" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
