import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Home, Users, ArrowRight } from "lucide-react";
import sucess1 from "/success1.webp";
import sucess2 from "/success2.webp";
import sucess3 from "/sucess3.webp";

const SuccessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const cards = [
    {
      image: sucess1,
      title: "Sales Excellence",
      description:
        "Proven track record with millions in residential sales. Trusted by families and investors for real results.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
    {
      image: sucess2,
      title: "Don't Just List It – Sell It!",
      description:
        "We market aggressively to get your home maximum exposure and top dollar. Every listing deserves a winning strategy.",
      icon: Home,
      color: "from-purple-500 to-pink-500",
    },
    {
      image: sucess3,
      title: "Guide for Buyers",
      description:
        "Market analysis, negotiation support, contractor access — we make buying stress-free and smart.",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm px-4 py-1.5 bg-blue-50 rounded-full inline-flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Proven Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Residential Sales –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Last 5 Years
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We helped nearly{" "}
            <strong className="text-gray-900">90 clients in 2021</strong> and
            closed over{" "}
            <strong className="text-gray-900">
              $28.5 million in real estate sales
            </strong>
            . Our team works daily to deliver unmatched results and a winning
            real estate experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  isHovered
                    ? "transform -translate-y-3 shadow-2xl"
                    : "hover:-translate-y-2"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Image Container with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-70"
                    }`}
                  ></div>

                  {/* Icon Badge */}
                  <div
                    className={`absolute top-4 right-4 p-3 rounded-xl bg-white/20 backdrop-blur-md transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-gray-900 shadow-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Gradient Bar */}
                  <div
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${
                      card.color
                    } transition-all duration-500 ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  ></div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Learn More Link */}
                  <div
                    className={`flex items-center gap-2 text-blue-600 font-semibold transition-all duration-300 ${
                      isHovered
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-2xl blur-xl`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default SuccessSection;
