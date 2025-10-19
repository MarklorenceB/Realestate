import React, { useState } from "react";
import { Home, TrendingUp, Award, Search, ArrowRight } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Home,
      title: "Commercial & Residential",
      description:
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Search,
      title: "Find Your Dream Home",
      description:
        "From cozy condos to luxury estates, we have the expertise and connections to find the perfect property that fits your lifestyle and budget.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Real Estate Done Right",
      description:
        "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Award,
      title: "Rely on Expertise",
      description:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3 px-4 py-1.5 bg-blue-50 rounded-full inline-block">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 mt-4">
            Comprehensive Real Estate
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From market analysis to closing day, we provide end-to-end support
            for all your real estate needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isActive = activeService === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveService(idx)}
                className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-br shadow-2xl transform scale-105 -translate-y-2"
                    : "bg-white hover:shadow-xl transform hover:-translate-y-1"
                } ${isActive ? service.color : ""}`}
              >
                {/* Background Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : ""
                  } bg-gradient-to-br ${service.color} blur-xl -z-10`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`mb-6 inline-flex p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 backdrop-blur-sm"
                      : `${service.bgColor} group-hover:scale-110`
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 transition-colors duration-300 ${
                      isActive ? "text-white" : service.iconColor
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Arrow Indicator */}
                <div
                  className={`mt-6 flex items-center gap-2 font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-white opacity-100"
                      : "text-blue-600 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
