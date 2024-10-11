"use client";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">School Finder</span>
            <img
              src="/logo.png"
              alt="School Finder Logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">{/* Mobile menu button */}</div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/schools"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Schools
          </Link>
          <Link
            to="/#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            to="/#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
