import React from "react";
import sucess1 from "/success1.webp";
import sucess2 from "/success2.webp";
import sucess3 from "/sucess3.webp";

const SuccessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Residential Sales – Last 5 Years
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We helped nearly <strong>90 clients in 2021</strong> and closed over{" "}
            <strong>$28.5 million in real estate sales</strong>. Our team works
            daily to deliver unmatched results and a winning real estate
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
            <img
              src={sucess1}
              alt="Sold Homes"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Sales Excellence</h3>
              <p className="text-gray-600">
                Proven track record with millions in residential sales. Trusted
                by families and investors for real results.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
            <img
              src={sucess2}
              alt="Sell Homes"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Don’t Just List It – Sell It!
              </h3>
              <p className="text-gray-600">
                We market aggressively to get your home maximum exposure and top
                dollar. Every listing deserves a winning strategy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
            <img
              src={sucess3}
              alt="Buyer Guide"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Guide for Buyers</h3>
              <p className="text-gray-600">
                Market analysis, negotiation support, contractor access — we
                make buying stress-free and smart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
