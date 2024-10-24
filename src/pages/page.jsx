import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg flex w-9/12">
          <div className="w-1/2">
            <img
              src="https://placehold.co/500x500"
              alt="Yellow jacket with grey shirt and blue jeans"
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-6">
            <h1 className="text-2xl font-bold mb-4 text-purple-600">
              Muna British Academy, Aldar Academies
            </h1>
            <table className="w-full text-gray-500">
              <tbody className="text-base">
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="py-2">
                    <b>Address: </b> Hamdan, Abu Dhabi
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="py-2">
                    <b>Founded: </b> Hamdan, Abu Dhabi
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="py-2">
                    <b>Curriculum: </b> Hamdan, Abu Dhabi
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="py-2">
                    <b>Rating: </b> Hamdan, Abu Dhabi
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="py-2">
                    <b>Fee: </b> Hamdan, Abu Dhabi
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="py-2">
                    <b>Gender: </b> Hamdan, Abu Dhabi
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-9/12">
          <h2>
            <button
              type="button"
              onClick={toggleAccordion}
              className="flex items-center justify-between w-full p-5 font-medium text-purple-500 border border-b-0 border-purple-200 rounded-t-xl focus:ring-4 focus:ring-purple-200 hover:bg-purple-100 gap-3"
            >
              <span className="font-bold">Details</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
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
              <p className="mb-2 text-gray-500 text-justify">
                Welcome to Muna British Academy- A high-achieving British school for children from Nursery to Year 6. At Muna British Academy we are all tireless in our pursuit of excellence. We endeavour to provide a safe and nurturing community where diversity is celebrated, mutual respect amongst adults and children is practiced, and where families are seen as valued partners in establishing the foundations for life-long learning. Outstanding teaching and the use of first-class resources and facilities ensure we deliver a rich and varied curriculum in an inspiring, creative and memorable way. We aim to instil in all our pupils the core values of co -operation, consideration, courtesy and common sense, enabling them to grow… 
                {isExpanded ? (
                  <span>
                    Welcome to Muna British Academy- A high-achieving British school for children from Nursery to Year 6. At Muna British Academy we are all tireless in our pursuit of excellence. We endeavour to provide a safe and nurturing community where diversity is celebrated, mutual respect amongst adults and children is practiced, and where families are seen as valued partners in establishing the foundations for life-long learning. Outstanding teaching and the use of first-class resources and facilities ensure we deliver a rich and varied curriculum in an inspiring, creative and memorable way. We aim to instil in all our pupils the core values of co-operation, consideration, courtesy and common sense, enabling them to grow into globally-minded individuals fully equipped to make a positive contribution to the future. Through developing strong relationships with our community we are committed to ‘Achieving Excellence Together’. Muna British Academy opened in September 2009. Facilities at the school are excellent and include a large astro-turf field, outdoor swimming pool, a well stocked library, a large multi-purpose hall and gym, a number of computer suites and creative outdoor play areas. Muna British Academy is a very happy, purposeful place for children to learn. Children love coming to our school. We pride ourselves on the progress children make, the quality of relationships in the school and the ways that we ensure that children are safe and well cared for. Although we have almost 100 staff and over 700 pupils, visitors regularly comment on our family atmosphere and happy community feel. When recruiting staff, we are lucky to be inundated with applications which means that we can acquire the very best practitioners in the world. All of our teaching staff are experienced, well qualified and motivated to provide the very best education we can. Our class teachers have experience of teaching the English Curriculum and come predominantly from the UK. Summary of ADEK Inspection Muna British Academy is an outstanding school. Attainment in all core subjects is either at or above international standards, and is especially high in the subjects taught in English. Children in Kindergarten (KG) display confident social skills. Students throughout the school have excellent language skills in English, well developed learning skills, and are highly proficient in using information and communication technology (ICT) as a learning tool in all subjects. Personal development is a key strength and extremely well fostered by the outstanding quality of protection, care, support and guidance for all groups of students. Teaching and assessment are generally outstanding and significantly impact on the high rates of progress made by students; there are high levels of consistency in subjects taught in English, particularly in the younger years. The design, implementation and adaptation of the curriculum are outstanding. The highly effective planning creates modifications to successfully engage and meet the learning needs of students of all abilities. The quality of leadership and management at all levels is outstanding. Governance provides strong strategic guidance. The school’s self-evaluation processes are rigorous and comprehensive; careful analysis informs well focussed priorities in development planning. Continuous professional development targets needs effectively and a very positive impact on the quality of teaching and learning. Staff, parents and students are extremely supportive of the school’s aims and the inspirational and student-focused leadership provided by the senior leadership team (SLT). School’s strengths Students’ high academic standards and rates of progress, and the enjoyment they show in learning. The harmonious and inclusive school community. Students’ remarkable growth in personal development fostered by highly effective procedures for protection, care, guidance and support. The high quality of teaching and assessment. The high quality of curriculum planning, adaptation and implementation. Inspirational leadership, strong strategic guidance, highly effective self-evaluation and school development planning. 
                    <button
                      type="button"
                      onClick={toggleReadMore}
                      className="text-purple-500 hover:text-purple-700"
                    >
                     &nbsp; Read Less
                    </button>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={toggleReadMore}
                    className="text-purple-500 hover:text-purple-700"
                  >
                  &nbsp;  Read More
                  </button>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;