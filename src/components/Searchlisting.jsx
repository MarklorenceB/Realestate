import React, { useState } from "react";
import {
  Search,
  MapPin,
  Home,
  DollarSign,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  TrendingUp,
  Filter,
  X,
  SlidersHorizontal,
} from "lucide-react";

const Searchlisting = () => {
  const [search, setSearch] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const listings = [
    {
      id: 1,
      title: "Modern Family Home",
      location: "Las Vegas",
      price: "$350,000",
      type: "House",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      featured: true,
      status: "For Sale",
    },
    {
      id: 2,
      title: "Luxury Villa Retreat",
      location: "Henderson",
      price: "$1,200,000",
      type: "Luxury",
      beds: 5,
      baths: 4.5,
      sqft: "4,800",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      featured: true,
      status: "For Sale",
    },
    {
      id: 3,
      title: "Countryside Farmhouse",
      location: "Pahrump",
      price: "$450,000",
      type: "Farm",
      beds: 3,
      baths: 2,
      sqft: "3,200",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
      featured: false,
      status: "For Sale",
    },
    {
      id: 4,
      title: "Downtown Luxury Condo",
      location: "Las Vegas",
      price: "$525,000",
      type: "Apartment",
      beds: 2,
      baths: 2,
      sqft: "1,600",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      featured: false,
      status: "For Sale",
    },
    {
      id: 5,
      title: "Elegant Spanish Villa",
      location: "Henderson",
      price: "$875,000",
      type: "House",
      beds: 4,
      baths: 3.5,
      sqft: "3,600",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      featured: false,
      status: "For Sale",
    },
    {
      id: 6,
      title: "Mountain View Estate",
      location: "Pahrump",
      price: "$650,000",
      type: "Luxury",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      featured: true,
      status: "For Sale",
    },
  ];

  const filteredListings = listings.filter((house) => {
    return (
      house.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterLocation ? house.location === filterLocation : true) &&
      (filterType ? house.type === filterType : true) &&
      (filterPrice
        ? parseInt(house.price.replace(/\D/g, "")) <= parseInt(filterPrice)
        : true)
    );
  });

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setFilterLocation("");
    setFilterType("");
    setFilterPrice("");
  };

  const activeFiltersCount = [
    search,
    filterLocation,
    filterType,
    filterPrice,
  ].filter(Boolean).length;

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
      id="listings"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Property Listings
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Find Your Perfect Home
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our curated collection of premium properties
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by property name, location, or keyword..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-2xl transition flex items-center space-x-2 font-semibold"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Advanced Filters */}
          {showAdvanced && (
            <div className="border-t pt-6 animate-in fade-in slide-in-from-top-2">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition appearance-none bg-white"
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                    >
                      <option value="">All Locations</option>
                      <option value="Las Vegas">Las Vegas</option>
                      <option value="Pahrump">Pahrump</option>
                      <option value="Henderson">Henderson</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition appearance-none bg-white"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                    >
                      <option value="">All Types</option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Luxury">Luxury</option>
                      <option value="Farm">Farm</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition appearance-none bg-white"
                      value={filterPrice}
                      onChange={(e) => setFilterPrice(e.target.value)}
                    >
                      <option value="">Any Price</option>
                      <option value="200000">Under $200k</option>
                      <option value="500000">Under $500k</option>
                      <option value="1000000">Under $1M</option>
                      <option value="2000000">Under $2M</option>
                    </select>
                  </div>
                </div>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
                >
                  <X className="w-4 h-4" />
                  <span>Clear all filters</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-gray-600">
            <span className="font-bold text-gray-900">
              {filteredListings.length}
            </span>{" "}
            properties found
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="grid grid-cols-2 gap-1 w-5 h-5">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="space-y-1 w-5 h-5">
                <div className="bg-current h-1 rounded"></div>
                <div className="bg-current h-1 rounded"></div>
                <div className="bg-current h-1 rounded"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Property Listings */}
        {filteredListings.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No properties found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredListings.map((house) => (
              <div
                key={house.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    viewMode === "list" ? "sm:w-2/5 h-64 sm:h-auto" : "h-64"
                  }`}
                >
                  <img
                    src={house.image}
                    alt={house.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  {house.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Featured</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => toggleFavorite(house.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition ${
                        favorites.includes(house.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/80 text-gray-700 hover:bg-white"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(house.id) ? "fill-current" : ""
                        }`}
                      />
                    </button>
                    <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition text-gray-700">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {house.status}
                  </div>
                </div>
                <div
                  className={`p-6 ${
                    viewMode === "list"
                      ? "sm:w-3/5 flex flex-col justify-between"
                      : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {house.type}
                      </span>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{house.location}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {house.title}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 mb-4">
                      {house.price}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 mb-6 pb-6 border-b">
                      <div className="flex items-center space-x-1">
                        <Bed className="w-5 h-5" />
                        <span className="font-medium">{house.beds} Beds</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="w-5 h-5" />
                        <span className="font-medium">{house.baths} Baths</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Square className="w-5 h-5" />
                        <span className="font-medium">{house.sqft} sqft</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl">
                      View Details
                    </button>
                    <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition font-semibold">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredListings.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition font-semibold text-lg shadow-lg inline-flex items-center space-x-2">
              <span>Load More Properties</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Searchlisting;
