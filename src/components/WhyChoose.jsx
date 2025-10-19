import React from "react";
import { TrendingUp, Users, CheckCircle, Award } from "lucide-react";

const WhyChoose = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team works tirelessly to grow and learn, ensuring we deliver
              exceptional results year after year. Your success is our priority,
              and we're committed to providing an unmatched real estate
              experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Unmatched Market Knowledge
                  </h4>
                  <p className="text-gray-600">
                    Nobody knows the market like we do. Benefit from our deep
                    local expertise and industry insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Maximum Exposure
                  </h4>
                  <p className="text-gray-600">
                    We exhaust every avenue to ensure your listing reaches
                    thousands of qualified buyers.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Full-Service Support
                  </h4>
                  <p className="text-gray-600">
                    From financing guidance to contractor referrals, we connect
                    you with trusted professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Stress-Free Experience
                  </h4>
                  <p className="text-gray-600">
                    Nervous about your property journey? Don't be. We ensure you
                    feel confident every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                  <Users className="w-10 h-10 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Expert Team
                    </div>
                    <div className="text-sm text-gray-600">
                      Dedicated professionals at your service
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                  <Award className="w-10 h-10 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Proven Track Record
                    </div>
                    <div className="text-sm text-gray-600">
                      Millions in successful transactions
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                  <TrendingUp className="w-10 h-10 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Market Leaders
                    </div>
                    <div className="text-sm text-gray-600">
                      Top performance in our region
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
