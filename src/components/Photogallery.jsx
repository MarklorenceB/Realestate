import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  Share2,
  Grid3x3,
} from "lucide-react";

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [viewMode, setViewMode] = useState("slider");

  const galleryImages = [
    {
      id: 1,
      url: "/slider1.webp",
      title: "Front View",
      category: "Interior",
    },
    {
      id: 2,
      url: "/slider2.webp",
      title: "Front View",
      category: "Interior",
    },
    {
      id: 3,
      url: "/slider3.webp",
      title: "Front View",
      category: "Interior",
    },
    {
      id: 4,
      url: "/slider4.webp",
      title: "Front View",
      category: "Interior",
    },
    {
      id: 5,
      url: "/slider5.webp",

      category: "Exterior",
    },
    {
      id: 6,
      url: "/slider6.webp",
      title: "Front View",
      category: "Exterior",
    },
    {
      id: 7,
      url: "/slider7.webp",
      title: "Front View",
      category: "Interior",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsZoomed(false);
  };

  const handleDownload = () => {
    alert("Download functionality would be implemented here");
  };

  const handleShare = () => {
    alert("Share functionality would be implemented here");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Property Gallery
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Explore Every Detail
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Take a virtual tour through our stunning properties
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setViewMode("slider")}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                viewMode === "slider"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Slider View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* Slider View */}
        {viewMode === "slider" && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 md:h-[600px] overflow-hidden group">
                <img
                  src={galleryImages[currentIndex].url}
                  alt={galleryImages[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay with Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
                      {galleryImages[currentIndex].category}
                    </div>
                    <h3 className="text-3xl font-bold">
                      {galleryImages[currentIndex].title}
                    </h3>
                    <p className="text-lg text-gray-200 mt-2">
                      {currentIndex + 1} of {galleryImages.length}
                    </p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 p-4 rounded-full shadow-lg transition transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 p-4 rounded-full shadow-lg transition transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => openModal(currentIndex)}
                    className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleShare}
                    className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-6 bg-gray-50">
                <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition transform hover:scale-105 ${
                        index === currentIndex
                          ? "ring-4 ring-blue-600 scale-105"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="px-6 pb-6">
                <div className="flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-blue-600 w-12"
                          : "bg-gray-300 w-8"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openModal(index)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-xs font-semibold bg-blue-600 px-2 py-1 rounded-full inline-block mb-1">
                        {image.category}
                      </div>
                      <h4 className="text-lg font-bold">{image.title}</h4>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <Maximize2 className="w-5 h-5 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Lightbox */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 flex space-x-2 z-50">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition"
              >
                {isZoomed ? (
                  <ZoomOut className="w-6 h-6" />
                ) : (
                  <ZoomIn className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={handleDownload}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition"
              >
                <Download className="w-6 h-6" />
              </button>
              <button
                onClick={handleShare}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Image */}
            <div className="relative max-w-6xl w-full">
              <img
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].title}
                className={`w-full h-auto max-h-[80vh] object-contain transition-transform duration-300 ${
                  isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full">
                <div className="text-center">
                  <span className="font-semibold">
                    {galleryImages[currentIndex].title}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">
                    {currentIndex + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Thumbnail Navigation at Bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
              <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition ${
                      index === currentIndex
                        ? "ring-2 ring-white scale-110"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;
