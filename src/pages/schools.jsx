import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Schools = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get URL search params for initial values
  const searchParams = new URLSearchParams(location.search);
  const initialCountry = searchParams.get("country");
  const initialCity = searchParams.get("city");

  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [region, setRegion] = useState("Middle East");
  const [selectedCountry, setSelectedCountry] = useState(initialCountry || "");
  const [selectedCity, setSelectedCity] = useState(initialCity || "");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    // Fetch school data
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        setSchools(data);
        setFilteredSchools(data);

        // Extract countries for filtering
        const allCountries = [...new Set(data.map((school) => school.country))];
        setCountries(allCountries);
      });
  }, []);

  useEffect(() => {
    // Filter schools based on selected country and city
    let filtered = schools;
    if (selectedCountry && selectedCountry !== "All") {
      filtered = filtered.filter(
        (school) => school.country === selectedCountry
      );
    }
    if (selectedCity && selectedCity !== "All") {
      filtered = filtered.filter((school) => school.city === selectedCity);
    }
    setFilteredSchools(filtered);

    // Update city options when country changes
    if (selectedCountry && selectedCountry !== "All") {
      const filteredCities = [
        ...new Set(
          schools
            .filter((school) => school.country === selectedCountry)
            .map((school) => school.city)
        ),
      ];
      setCities(filteredCities);
    } else {
      setCities([]);
    }
  }, [selectedCountry, selectedCity, schools]);

  useEffect(() => {
    // If country and city are not provided in the URL, fetch user's location
    if (!initialCountry && !initialCity) {
      fetch("https://get.geojs.io/v1/ip/geo.json")
        .then((response) => response.json())
        .then((data) => {
          setLocationData({
            country: data.country,
            city: data.city,
            state: data.region,
          });

          // Set country and city from location data if available
          if (data.country) {
            setSelectedCountry(data.country);
            setSelectedCity(data.city || "All");
            updateURL(data.country, data.city || "All");
          }
        })
        .catch((error) =>
          console.error("Error fetching location data:", error)
        );
    }
  }, [initialCountry, initialCity]);

  // Handle region change (if applicable)
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    // Reset country and city when region changes
    setSelectedCountry("All");
    setSelectedCity("All");
    updateURL("All", "All"); // Reset URL to show all countries and cities
  };

  // Handle country change
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedCity("All"); // Reset city when country changes
    updateURL(country, "All");
  };

  // Handle city change
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    updateURL(selectedCountry, city);
  };

  // Update the URL query parameters
  const updateURL = (country, city) => {
    const searchParams = new URLSearchParams();
    if (country !== "All") searchParams.set("country", country);
    if (city !== "All") searchParams.set("city", city);
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Schools in&nbsp;
        <span className="text-purple-500">{selectedCountry}&nbsp;</span>
        {selectedCity !== "All" && selectedCity && (
          <span className="text-purple-500">,&nbsp;{selectedCity}</span>
        )}
      </h2>

      {/* Filter Section */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Region Filter */}
        <div>
          <label htmlFor="region" className="block mb-1 font-medium">
            Region
          </label>
          <select
            id="region"
            value={region}
            onChange={handleRegionChange}
            className="w-full p-2 border rounded"
          >
            <option value="Middle East">Middle East</option>
            {/* Add more regions as needed */}
          </select>
        </div>

        {/* Country Filter */}
        <div>
          <label htmlFor="country" className="block mb-1 font-medium">
            Country
          </label>
          <select
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full p-2 border rounded"
          >
            <option value="All">All</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div>
          <label htmlFor="city" className="block mb-1 font-medium">
            City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full p-2 border rounded"
            disabled={selectedCountry === "All"}
          >
            <option value="All">All</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="text-md mb-4 font-semibold">
        Results : {filteredSchools.length}
      </p>

      {/* Schools List */}
      {filteredSchools.length ? (
        <ul className="grid grid-cols-1 gap-6">
          {filteredSchools.map((school, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div className="mx-6">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-purple-600">
                  {school.name}
                </h3>
                <p className="font-normal my-1">
                  <span className="text-gray-600 font-semibold">Address: </span>
                  {school.address} , {school.city}
                </p>
                <p className="font-normal">
                  <span className="text-gray-600 font-semibold">Founded: </span>{" "}
                  {school.founded}
                </p>
              </div>
              <div className="mr-6">
                <button
                  onClick={() => navigate(`/school/${school.id}`)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full border-2 border-transparent hover:bg-white hover:text-black hover:border-purple-500 transition duration-200"
                >
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500">
          No schools found for the selected filters.
        </p>
      )}
    </div>
  );
};

export default Schools;
