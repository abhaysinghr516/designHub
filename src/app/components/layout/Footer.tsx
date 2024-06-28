import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#030303] text-[#5B5B5B] h-screen py-3">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-right w-full flex justify-center items-center">
          <p className="text-6xl sm:text-8xl md:text-[12rem] font-medium">
            DesignHUB
          </p>
        </div>
      </div>
      <div className="bg-[#f8f7f4] text-black py-3 absolute bottom-0 left-0 right-0 w-full">
        <div className="container mx-auto text-center">
          <p className="flex justify-center items-center">
            Created with{" "}
            <span>
              <svg
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-8 text-purple-500 fill-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </span>{" "}
            by{" "}
            <Link
              className="underline decoration-wavy decoration-[#3C665E]"
              href={"https://x.com/abhaysinghr1"}
            >
              Abhay Singh Rathore
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
