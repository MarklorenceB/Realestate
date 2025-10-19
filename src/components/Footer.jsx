import React, { useState } from "react";
import {
  Home,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  ChevronRight,
} from "lucide-react";

const ModernFooter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Buy Property", href: "#" },
    { name: "Sell Property", href: "#" },
    { name: "Rent Property", href: "#" },
    { name: "Property Management", href: "#" },
    { name: "Investment Consulting", href: "#" },
  ];

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Market Reports", href: "#" },
    { name: "Mortgage Calculator", href: "#" },
    { name: "Buyer Guide", href: "#" },
    { name: "Seller Guide", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/MarciHomes/",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/marciandlauren_nvrealtors/",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/marci-metzger-30642496/",
      color: "hover:bg-blue-700",
    },
    {
      name: "Yelp",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.136 3.43a1.71 1.71 0 0 0-.63 2.273l3.272 6.07c.262.486.82.726 1.35.584l1.994-.532c.707-.188 1.078-.96.78-1.624L7.28 3.86A1.71 1.71 0 0 0 4.136 3.43ZM13.659 9.47l6.386-3.397c.815-.434.953-1.54.26-2.158a1.71 1.71 0 0 0-2.102-.128l-5.43 4.267c-.553.435-.652 1.24-.22 1.792l.873 1.132c.375.487 1.06.62 1.633.363ZM12.69 13.077l-1.314 7.12c-.163.884.547 1.703 1.45 1.703.69 0 1.287-.49 1.42-1.17l1.462-6.585c.145-.654-.218-1.314-.84-1.544l-1.287-.47c-.758-.276-1.58.232-1.891.946ZM8.518 14.391l-6.221 3.71c-.76.453-.948 1.45-.399 2.135a1.71 1.71 0 0 0 2.18.41l5.65-3.572c.557-.352.782-1.054.518-1.656l-.56-1.285c-.29-.667-1.085-.948-1.728-.742ZM19.674 13.5l-4.778-.827c-.717-.124-1.383.406-1.383 1.132a1.19 1.19 0 0 0 .018.195l.88 4.861c.125.692.708 1.19 1.397 1.19.58 0 1.073-.343 1.296-.892l1.988-4.982c.296-.742-.173-1.555-.815-1.678Z" />
        </svg>
      ),
      href: "https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Marci Metzger</h3>
                  <p className="text-blue-400 text-sm">Real Estate Experts</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in finding the perfect property. We deliver
                exceptional real estate experiences with dedication, expertise,
                and personalized service.
              </p>

              {/* Newsletter */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-lg mb-2">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest property listings and market insights.
                </p>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition text-white placeholder-gray-400"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 p-2 rounded-lg transition"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-green-400 text-sm mt-2 animate-in fade-in">
                    ✓ Successfully subscribed!
                  </p>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 flex items-center">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-white transition flex items-start group"
                  >
                    <div className="bg-white/5 p-2 rounded-lg mr-3 group-hover:bg-white/10 transition">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Call Us</p>
                      <p className="font-medium">+1 (234) 567-890</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@marcimetzger.com"
                    className="text-gray-400 hover:text-white transition flex items-start group"
                  >
                    <div className="bg-white/5 p-2 rounded-lg mr-3 group-hover:bg-white/10 transition">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="font-medium">info@marcimetzger.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-start group"
                  >
                    <div className="bg-white/5 p-2 rounded-lg mr-3 group-hover:bg-white/10 transition">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Office</p>
                      <p className="font-medium text-sm">
                        3190 HW-160, Suite F<br />
                        Pahrump, NV 89048
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2025 Marci Metzger Homes. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm mr-2">Follow Us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/5 backdrop-blur-sm p-3 rounded-xl hover:text-white transition transform hover:scale-110 hover:-translate-y-1 border border-white/10 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
