import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import border from "../styles/border.module.css";
import perfil from "../imgs/perfil.png";
import { useInView } from "react-intersection-observer";
import { MotionConfig } from "framer-motion";
import { useAnimation } from "framer-motion";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { Link } from "react-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import NavScroll from "./NavScroll";

const Skills = ({ setPosition }) => {
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
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  //background: "#0d1729"
  return (
    <div
      ref={ref}
      className="App flex flex-col items-center content-center justify-center gap-2 this? "
    >
      {/* pr-96 */}
      <motion.div className="" animate={animation}>
        {/* <motion.div className="flex flex-col items-start border-l-2 border-gray-600 hover:border-gray-400  duration-300 hover:duration-400 pl-6 pr-6"> */}
        <motion.div>
          <div
            className="w-screen flex flex-col items-center justify-between
          "
          >
            {" "}
            <div className="mb-6 md:mb-12">
              {screenSize.width > 500 ? (
                <Link
                  to="home"
                  smooth={true}
                  offset={-250}
                  duration={500}
                  onClick={() => {
                    setPosition("0");
                  }}
                >
                  <div className=" ">
                    <BsFillArrowUpCircleFill className="w-8 h-8 hover:h-10 hover:w-10 duration-500	hover:duration-500 hover:text-spotify" />
                  </div>
                </Link>
              ) : (
                <Link
                  to="home"
                  smooth={true}
                  offset={-250}
                  duration={500}
                  onClick={() => {
                    setPosition("0");
                  }}
                >
                  <div className=" ">
                    <BsFillArrowUpCircleFill className="w-6 h-6 hover:h-8 hover:w-8  duration-500	hover:duration-500 hover:text-spotify" />
                  </div>
                </Link>
              )}
            </div>
            <div className="w-screen">
              <div className="">
                <VerticalTimeline lineColor="#fff">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: "#0d1729", color: "#fff" }}
                    icon={<FaBook />}
                    date="2023 April - June"
                  >
                    <h3>Course & Work experience</h3>
                    <p className="">Course & work experience in buffalo</p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: "#0d1729", color: "#fff" }}
                    icon={<MdWorkOutline />}
                    date="2023 June - Present"
                  >
                    <h3>
                      Studying Higher Technician Degree in Hotel Management
                    </h3>
                    <p className=""></p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: "#0d1729", color: "#fff" }}
                    icon={<FaGlassMartiniAlt />}
                    date="2023 Jan - Present"
                  >
                    <h3>Trabajo</h3>
                    <p className="">Trabajo</p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>
            <div className="mt-6 md:mt-12">
              {screenSize.width > 500 ? (
                <Link
                  to="aboutmereal"
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setPosition("2");
                  }}
                >
                  <div className=" ">
                    <BsFillArrowDownCircleFill className="w-8 h-8 hover:h-10 hover:w-10 duration-500	hover:duration-500 hover:text-spotify" />
                  </div>
                </Link>
              ) : (
                <Link
                  to="aboutmereal"
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    setPosition("2");
                  }}
                >
                  <div className="">
                    <BsFillArrowDownCircleFill className="w-6 h-6 hover:h-8 hover:w-8 duration-500	hover:duration-500 hover:text-spotify" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* <NavScroll /> */}
    </div>
  );
};

export default Skills;
