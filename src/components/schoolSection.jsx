import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const SchoolSection = () => {
  const { country } = useParams();
  const [locationData, setLocationData] = useState({
    country: "",
    city: "",
    state: "",
  });
  const [schools, setSchools] = useState([]);
  const [visibleSchools, setVisibleSchools] = useState(8); // Initially show 6 schools
  const [loading, setLoading] = useState(true); // To track loading state

  // Fetch the user's current location
  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((response) => response.json())
      .then((data) => {
        setLocationData({
          country: data.country,
          city: data.city,
          state: data.region,
        });
        fetchSchools(data.country, data.city); // Fetch schools based on location
      })
      .catch((error) => console.error("Error fetching location data:", error));
  }, []);

  // Fetch schools based on country and city
  const fetchSchools = (country, city) => {
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        let filteredSchools;

        // If 'All' is selected, fetch all schools
        if (country === "All") {
          filteredSchools = data;
        } else {
          // Filter schools by country and city
          filteredSchools = data.filter(
            (school) => school.country === country && school.city === city
          );
        }

        setSchools(filteredSchools);
        setLoading(false); // Set loading to false once schools data is fetched
      })
      .catch((error) => {
        console.error("Error fetching schools data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  };

  // Show more schools when the button is clicked
  const handleSeeMore = () => {
    setVisibleSchools((prevVisible) => prevVisible + 4); // Increase the number of visible schools
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Schools in&nbsp;
        <span className="text-purple-500">{locationData.city}&nbsp;</span>,
        <span className="text-purple-500">&nbsp;{locationData.country}</span>
      </h2>

      {loading ? (
        <p className="text-center">Loading schools...</p>
      ) : schools.length === 0 ? (
        <p className="text-center text-red-500">
          We are currently working on our database, your area's schools will be
          uploaded soon.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {" "}
            {/* Two cards in a row */}
            {schools.slice(0, visibleSchools).map((school) => (
              <div
                key={school.id}
                className="max-w-sm w-full lg:max-w-full lg:flex border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r hover:border-purple-500 transition duration-200"
              >
                <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url(${school.image})` }}
                  title={school.name}
                ></div>
                <div className="p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {school.name}
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold">{school.city} </span>
                      <span className="">, {school.country}</span>

                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-10 w-auto  rounded-full mr-4"
                      src={school.logo}
                      alt="School Logo"
                    />{" "}
                    {/* <div className="text-sm">
                      <p className="text-gray-900 leading-none">School Info</p>
                      <p className="text-gray-600">Aug 18</p>{" "}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleSchools < schools.length && ( // Show button only if there are more schools to show
            <div className="text-center mt-4">
              <Link
                to={`/schools?country=${locationData.country}&city=${locationData.city}`}
              >
                <button
                  // onClick={handleSeeMore}
                  className=" bg-white px-4 py-2 mt-6 rounded-lg border-2 border-transparent hover:bg-purple-500 hover:text-white border-purple-500 transition duration-200"
                >
                  See More
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SchoolSection;
