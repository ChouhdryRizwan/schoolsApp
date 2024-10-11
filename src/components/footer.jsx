import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="text-center text-white bg-gray-800">
      <div className="container my-5">
        <section className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-4 text-center justify-center pt-5 gap-4">
            <div>
              <h6 className="uppercase font-semibold">
                <Link to="/#" className="text-white hover:text-purple-500">
                  Home
                </Link>
              </h6>
            </div>
            <div>
              <h6 className="uppercase font-semibold">
                <Link to="/#" className="text-white hover:text-purple-500">
                  About
                </Link>
              </h6>
            </div>
            <div>
              <h6 className="uppercase font-semibold">
                <Link
                  to="/schools"
                  className="text-white hover:text-purple-500"
                >
                  Schools
                </Link>
              </h6>
            </div>
            <div>
              <h6 className="uppercase font-semibold">
                <Link to="/help" className="text-white hover:text-purple-500">
                  Contact
                </Link>
              </h6>
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <hr className="md:w-5/6 my-5 border-gray-300" />
        </div>

        <section className="mb-5">
          <div className="flex justify-center">
            <div className="lg:w-2/3 text-center">
              <p>
                Welcome to School Finder, your go-to platform for discovering
                and comparing schools worldwide. Easily find the perfect
                educational institution for your child, wherever you are in the
                world.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Copyright */}
      <div className="text-center p-3 bg-black/20">
        © 2024 Copyright :{" "}
        <Link to="#" className="text-purple-500 font-semibold">
          School Finder
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
