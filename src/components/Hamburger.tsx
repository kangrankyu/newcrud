import React, { useState } from "react";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block flex flex-col  my-3 gap-2 `}
        >
          <button className="bg-white hover:bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 border border-gray-400 rounded shadow">
            마이페이지
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 border border-gray-400 rounded shadow">
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
