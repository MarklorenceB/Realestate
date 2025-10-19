import React from "react";
import { useState } from "react";
import {
  Home,
  TrendingUp,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Award,
  Search,
} from "lucide-react";

const Contact = () => {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start Your Property Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about affordability, credit, or loan options? Trust
              us to connect you with the right professionals. We're here to help
              you every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Visit Our Office</div>
                  <div className="text-gray-400">
                    3190 HW-160, Suite F<br />
                    Pahrump, Nevada 89048
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Office Hours</div>
                  <div className="text-gray-400">
                    Open Daily: 8:00 AM - 7:00 PM
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    After-hours appointments available upon request
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Call Us Anytime</div>
                  <div className="text-gray-400">
                    Available for all your inquiries
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition resize-none"
                  placeholder="Tell us about your property needs..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
