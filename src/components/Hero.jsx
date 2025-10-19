import React from "react";
import Img from "/hero.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 tracking-wide">
              Marci Metzger • Trusted Local Realtor
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Find Your Dream Home in{" "}
              <span className="text-blue-600">Pahrump</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Helping families and investors buy and sell real estate with
              honesty, dedication, and results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Free Home Consultation
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition font-semibold text-lg">
                Explore Listings
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="flex items-center gap-10 mt-10">
              <div>
                <p className="text-3xl font-bold text-gray-900">30+</p>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">300+</p>
                <p className="text-gray-500 text-sm">Homes Sold</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5⭐</p>
                <p className="text-gray-500 text-sm">Client Reviews</p>
              </div>
            </div>
          </div>

          {/* RIGHT HERO IMAGE or CARD */}
          <div className="relative" data-aos="fade-left">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={Img}
                alt="Dream Home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 -left-6 bg-white px-6 py-4 rounded-lg shadow-lg border">
              <p className="text-sm text-gray-600">Recently Sold</p>
              <p className="font-semibold text-gray-900">
                $450,000 · Pahrump NV
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
