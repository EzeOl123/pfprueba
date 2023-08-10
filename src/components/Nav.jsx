import React, { useEffect } from "react";
import { Link } from "react-scroll";
const Nav = () => {
  let pathname = window.location.pathname;
  let hola = pathname.split("/");
  let path = hola[hola.length - 1];
  console.log(path);
  return (
    <div className="flex flex-row items-center justify-center font-bold gap-2 text-xs mt-2">
      <a
        href="#section-home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <button>
          <h5
            className={
              path == ""
                ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
            }
          >
            Home
          </h5>
        </button>
      </a>
      {/* <Link to={`/projects`}>
        <button>
          <h5
            className={
              path == "projects"
                ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
            }
          >
            Proyectos
          </h5>
        </button>
      </Link> */}
      <a href="#experience" spy={true} smooth={true} offset={50} duration={500}>
        <button>
          <h5
            className={
              path == "experience"
                ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
            }
          >
            Experience
          </h5>
        </button>
      </a>
      <a href="#contact" spy={true} smooth={true} offset={50} duration={500}>
        <button>
          <h5
            className={
              path == "contact"
                ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
            }
          >
            Contact
          </h5>
        </button>
      </a>
    </div>
  );
};

export default Nav;
