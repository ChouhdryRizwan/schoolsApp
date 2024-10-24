import React from 'react';

const AboutUs = () => {
  return (
    <div className="section about-us py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 lg:offset-lg-1">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item border-b">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button flex justify-between w-full py-4 text-left text-gray-800 bg-white border-0 rounded-none focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Where shall we begin?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4">
                    Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-b">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button flex justify-between w-full py-4 text-left text-gray-800 bg-white border-0 rounded-none focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do we work together?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4">
                    Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-b">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button flex justify-between w-full py-4 text-left text-gray-800 bg-white border-0 rounded-none focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Why SCHOLAR is the best?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4">
                    There are more than one hundred responsive HTML templates to choose from <strong>Template</strong>Mo website. You can browse by different tags or categories.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-b">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button flex justify-between w-full py-4 text-left text-gray-800 bg-white border-0 rounded-none focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Do we get the best support?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
 <div className="accordion-body py-4">
                    You can also search on Google with specific keywords such as <code>templatemo business templates, templatemo gallery templates, admin dashboard templatemo, 3-column templatemo, etc.</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:flex lg:justify-center">
            <div className="section-heading">
              <h6>About Us</h6>
              <h2>What make us the best academy online?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid risus commodo.</p>
              <div className="main-button">
                <a href="#" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;