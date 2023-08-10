import React, { useEffect } from "react";
import { useState } from "react";

import Home2 from "./AND/Home2";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import Aboutmereal from "./Aboutmereal";

const Main = () => {
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  console.log(screenSize.width);
  //
  const [position, setPosition] = useState("0");
  //   let imgs = [
  //     "https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  //     "https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  //     "https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black",
  //     "https://img.shields.io/badge/typescript-%231572B6.svg?style=for-the-badge&logo=typescript&logoColor=white",
  //     "https://img.shields.io/badge/react-%234285F4.svg?style=for-the-badge&logo=react&logoColor=white",
  //     "https://img.shields.io/badge/redux-7A7ADB.svg?style=for-the-badge&logo=redux&logoColor=white",
  //     "https://img.shields.io/badge/tailwind-%234285F4.svg?style=for-the-badge&logo=tailwind&logoColor=white",
  //   ];
  //   let imgs2 = [
  //     "https://img.shields.io/badge/nodejs-%23054020.svg?style=for-the-badge&logo=javascript&logoColor=white",
  //     "https://img.shields.io/badge/express-%23054020.svg?style=for-the-badge&logo=javascript&logoColor=white",
  //     "https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black",
  //     "https://img.shields.io/badge/typescript-%231572B6.svg?style=for-the-badge&logo=typescript&logoColor=white",
  //     "https://img.shields.io/badge/Postgresql-%231572B6.svg?style=for-the-badge&logo=Postgresql&logoColor=white",
  //     "https://img.shields.io/badge/mongodb-%23054020.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  //     "https://img.shields.io/badge/JWT-%23121011.svg?style=for-the-badge&logo=JWT&logoColor=black",
  //   ];
  // let durationchanged1 = 1.5;
  // let durationchanged2 = 1.5;
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);
  useEffect(() => {
    console.log(position);
  }, [position]);
  return (
    <div>
      {/* <motion.div> */}
      {screenSize.width > 500 ? (
        <div className="sticky bg-red-300 top-0 flex flex-row w-full items-center content-center justify-center font-bold gap-2 text-lg	containerofbuttons?	 py-2">
          <Link
            to={"home"}
            smooth={true}
            offset={-250}
            duration={500}
            onClick={() => {
              setPosition("0");
            }}
          >
            <button>
              <h5
                className={
                  position == "0"
                    ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                    : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
                }
              >
                Home
              </h5>
            </button>
          </Link>
          <Link
            to={"experience"}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              setPosition("1");
            }}
            disabled={true}
          >
            <button>
              <h5
                className={
                  position == "1"
                    ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                    : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
                }
              >
                Experience
              </h5>
            </button>
          </Link>
          <Link
            to="aboutmereal"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              setPosition("2");
            }}
          >
            <button>
              <h5
                className={
                  position == "2"
                    ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                    : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
                }
              >
                About Me
              </h5>
            </button>
          </Link>
          <Link
            to={"contact"}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              setPosition("3");
            }}
          >
            <button>
              <h5
                className={
                  position == "3"
                    ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                    : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
                }
              >
                Contact
              </h5>
            </button>
          </Link>
        </div>
      ) : (
        <div className="sticky bg-red-300 top-0 flex flex-row w-full items-center content-center justify-center font-bold gap-2 text-xs py-2">
          <Link
            to={"home"}
            smooth={true}
            offset={-250}
            duration={500}
            onClick={() => {
              setPosition("0");
            }}
          >
            <button>
              <h5
                className={
                  position == "0"
                    ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                    : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
                }
              >
                Home
              </h5>
            </button>
          </Link>
          <Link
            to={"experience"}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              setPosition("1");
            }}
            disabled={true}
          >
            <button>
              <h5
                className={
                  position == "1"
                    ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                    : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
                }
              >
                Experience
              </h5>
            </button>
          </Link>
          <Link
            to="aboutmereal"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              setPosition("2");
            }}
          >
            <button>
              <h5
                className={
                  position == "2"
                    ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                    : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
                }
              >
                About Me
              </h5>
            </button>
          </Link>
          <Link
            to={"contact"}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              setPosition("3");
            }}
          >
            <button>
              <h5
                className={
                  position == "3"
                    ? "border-b border-gray-600 duration-300 hover:duration-400 text-spotify translate-y-1"
                    : "border-b border-gray-500 hover:border-gray-600 duration-300 hover:duration-400 hover:text-spotify hover:translate-y-1"
                }
              >
                Contact
              </h5>
            </button>
          </Link>
        </div>
      )}
      {/* </motion.div> */}
      <div id="home">
        <Home2 setPosition={setPosition} />
      </div>
      <div id="experience" className="h-screen">
        <div>
          <Skills className="" setPosition={setPosition} />
        </div>
      </div>
      <div id="aboutmereal">
        <Aboutmereal setPosition={setPosition} />
      </div>
      <div id="contact">
        <Contact setPosition={setPosition} />
      </div>
    </div>
  );
};

export default Main;
