import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SchoolDetail = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    axios
      .get(`/schools_data.json`)
      .then((response) => {
        const schoolData = response.data.find((s) => s.id === parseInt(id));
        setSchool(schoolData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching school details:", error);
        setLoading(false);
      });
  }, [id]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!school) {
    return <div>School not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row w-full md:w-9/12">
          <div className="w-full md:w-1/2 flex items-center justify-center border-2">
            <img
              src={school.image} // Use the image from the fetched data
              alt={school.name}
              className="w-80 h-80 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-6 mt-4 md:mt-0 flex items-center">
            <div>
              <h1 className="text-2xl font-bold mb-4 text-purple-600">
                {school.name}
              </h1>
              <table className="w-full text-gray-500">
                <tbody className="text-base">
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="py-2">
                      <b>Address: </b> {school.address}, {school.city}
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="py-2">
                      <b>Founded: </b> {school.founded}
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="py-2">
                      <b>Curriculum: </b> {school.curriculum}
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="py-2">
                      <b>Rating: </b> {school.rating}
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="py-2">
                      <b>Fee: </b> {school.fee}
                    </td>
                  </tr>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="py-2">
                      <b>Gender: </b> {school.gender}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <div className="bg-white md:p-6 rounded-lg shadow-lg w-full md:w-9/12 text-base md:text-md">
          <h2>
            <button
              type="button"
              onClick={toggleAccordion}
              className="flex items-center justify-between w-full p-5 font-medium text-purple-500 border border-b-0 border-purple-200 rounded-t-xl focus:ring-4 focus:ring-purple-200 hover:bg-purple-100 gap-3"
            >
              <span className="font-bold">Details</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          {isOpen && (
            <div className="p-5 border border-b-0 border-gray-200">
              <p className="mb-2 text-gray-500 text-start md:text-justify">
                {isExpanded
                  ? school.detail
                  : school.detail.substring(0, 500) + "..."}
                {isExpanded ? (
                  <button
                    type="button"
                    onClick={toggleReadMore}
                    className="text-purple-500 hover:text-purple-700"
                  >
                    Read Less
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={toggleReadMore}
                    className="text-purple-500 hover:text-purple-700"
                  >
                    &nbsp; Read More
                  </button>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolDetail;
