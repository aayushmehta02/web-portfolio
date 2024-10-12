import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown element

  // Toggle function to show/hide the dropdown on click
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Function to close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown
    }
  };

  // Add event listener to detect clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
    };
  }, []);

  return (
    <div
      className="relative group inline-block"
      onClick={toggleDropdown}
      ref={dropdownRef} // Attach the ref to the main container
    >
      <div className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 14"
          height="25"
          width="25"
        >
          <path
            fill="#FFA000"
            d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
          />
          <path
            fill="#FFCA28"
            d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
          />
        </svg>
        <p>Tech Stack - Open Me</p>
      </div>

      {/* Dropdown menu */}
      <div
        className={`absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } z-10`} // Added z-index here
      >
        <ul className="p-4 space-y-1">
          <li className="py-1">&#128193; src</li>
          <li className="pl-4 py-1">&#128193; Development</li>
          <li className="pl-8 py-1">&#128193; Web Development</li>
          <li className="pl-10 py-1">&#128196; MERN STACK</li>
          <li className="pl-8 py-1">&#128193; App Development</li>
          <li className="pl-10 py-1">&#128196; Flutter </li>
          <li className="pl-10 py-1">&#128196; React Native </li>
          <li className="pl-4 py-1">&#128193; Languages</li>
          <li className="pl-8 py-1">&#128196; Python</li>
          <li className="pl-8 py-1">&#128196; JavaScript</li>
          <li className="pl-4 py-1">&#128193; styles</li>
          <li className="pl-8 py-1">&#128196; globals.css</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
