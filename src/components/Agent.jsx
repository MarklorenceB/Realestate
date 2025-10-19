import React from "react";
import Agent from "/agent.webp";
import { Phone, Award, Home, Users } from "lucide-react";

const AgentIntro = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "30+" },
    { icon: Home, label: "Properties Sold", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "1000+" },
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      id="about"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Agent Image with Enhanced Styling */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative">
              <img
                src={Agent}
                alt="Marci Metzger"
                className="rounded-2xl shadow-2xl object-cover w-full h-[450px] transform group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5"></div>
            </div>
          </div>

          {/* Agent Info */}
          <div className="w-full lg:w-7/12 space-y-6">
            <div>
              <p className="inline-block text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3 px-4 py-1.5 bg-blue-50 rounded-full">
                Your Trusted Partner
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
                Marci Metzger
              </h2>
              <p className="text-xl text-blue-600 font-medium mb-6">
                Realtor for Nearly 3 Decades
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate about helping families and investors achieve their real
              estate goals through honesty, commitment, and results. Proudly
              serving the Pahrump community with trusted real estate expertise.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-2 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="tel:2069196886"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call: 206-919-6886</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentIntro;
