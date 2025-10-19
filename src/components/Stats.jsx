import React from "react";

const Stats = () => {
  const stats = [
    { number: "90+", label: "Clients Served in 2021" },
    { number: "$28.5M", label: "Sales Volume" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
