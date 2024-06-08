import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#f8f7f4] border-b border-gray-500 px-10 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <img src="/logo.png" alt="design Hub" className="h-12 w-12" />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              className="relative text-gray-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-gray-950 after:transition-all after:duration-300 hover:after:scale-x-100"
              href="/design-principles"
            >
              Design Principles
            </Link>
          </li>
          <li>
            <Link
              className="relative text-gray-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-gray-950 after:transition-all after:duration-300 hover:after:scale-x-100"
              href="/design-systems"
            >
              Design Systems
            </Link>
          </li>
          <li>
            <Link
              className="relative text-gray-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-gray-950 after:transition-all after:duration-300 hover:after:scale-x-100"
              href="/design-resources"
            >
              Design Resources
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
