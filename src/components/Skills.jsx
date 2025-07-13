import React, { useRef, useState } from "react";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [expanded, setExpanded] = useState({
    development: true,
    backend: false,
    languages: false,
    dataML: false,
  });

  const toggle = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <div className="bg-white text-black py-2 rounded-md shadow-lg flex justify-center items-center gap-4 px-4 cursor-pointer">
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
        </svg>
        <p className="font-medium">Tech Stack - Open Me</p>
      </div>

      {/* Dropdown menu */}
      <div
        ref={dropdownRef}
        className={`absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden z-10 ${
          isOpen ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <ul className="p-4 space-y-1 text-black text-sm">
          <li className="py-1">&#128193; src</li>

          {/* Development */}
          <li
            className="pl-4 py-1 cursor-pointer font-medium"
            onClick={() => toggle("development")}
          >
            &#128193; Development {expanded.development ? "▼" : "▶"}
          </li>
          {expanded.development && (
            <>
              <li className="pl-8 py-1">&#128193; Web Development</li>
              <li className="pl-10 py-1">&#128196; MERN STACK</li>
              <li className="pl-10 py-1">&#128196; Next.js</li>
              <li className="pl-10 py-1">&#128196; Firebase</li>
              <li className="pl-10 py-1">&#128196; Hasura</li>
              <li className="pl-8 py-1">&#128193; App Development</li>
              <li className="pl-10 py-1">&#128196; Flutter</li>
              <li className="pl-10 py-1">&#128196; React Native</li>
            </>
          )}

          {/* Backend */}
          <li
            className="pl-4 py-1 cursor-pointer font-medium"
            onClick={() => toggle("backend")}
          >
            &#128193; Backend {expanded.backend ? "▼" : "▶"}
          </li>
          {expanded.backend && (
            <>
              <li className="pl-8 py-1">&#128196; FastAPI</li>
              <li className="pl-8 py-1">&#128196; Express.js</li>
              <li className="pl-8 py-1">&#128196; GraphQL</li>
              <li className="pl-8 py-1">&#128196; REST APIs</li>
            </>
          )}

          {/* Languages */}
          <li
            className="pl-4 py-1 cursor-pointer font-medium"
            onClick={() => toggle("languages")}
          >
            &#128193; Languages {expanded.languages ? "▼" : "▶"}
          </li>
          {expanded.languages && (
            <>
              <li className="pl-8 py-1">&#128196; Python</li>
              <li className="pl-8 py-1">&#128196; JavaScript</li>
              <li className="pl-8 py-1">&#128196; TypeScript</li>
              <li className="pl-8 py-1">&#128196; SQL</li>
            </>
          )}

          {/* Data & ML */}
          <li
            className="pl-4 py-1 cursor-pointer font-medium"
            onClick={() => toggle("dataML")}
          >
            &#128193; Data & ML {expanded.dataML ? "▼" : "▶"}
          </li>
          {expanded.dataML && (
            <>
              <li className="pl-8 py-1">&#128196; Pandas</li>
              <li className="pl-8 py-1">&#128196; Numpy</li>
              <li className="pl-8 py-1">&#128196; Scikit-learn</li>
              <li className="pl-8 py-1">&#128196; LLM Integration</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
