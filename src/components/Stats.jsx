import React, { useState, useEffect, useRef } from "react";
import { Users, DollarSign, Award, ThumbsUp } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 90,
      suffix: "+",
      label: "Clients Served in 2021",
      icon: Users,
      color: "from-blue-400 to-cyan-400",
    },
    {
      number: 28.5,
      prefix: "$",
      suffix: "M",
      label: "Sales Volume",
      icon: DollarSign,
      color: "from-emerald-400 to-teal-400",
    },
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      icon: Award,
      color: "from-purple-400 to-pink-400",
    },
    {
      number: 100,
      suffix: "%",
      label: "Client Satisfaction",
      icon: ThumbsUp,
      color: "from-orange-400 to-red-400",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = start;
              return newCounts;
            });
          }
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Track Record of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Excellence
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Number */}
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.prefix || ""}
                  {stat.suffix === "M"
                    ? counts[idx].toFixed(1)
                    : Math.floor(counts[idx])}
                  {stat.suffix || ""}
                </div>

                {/* Label */}
                <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Stats;
