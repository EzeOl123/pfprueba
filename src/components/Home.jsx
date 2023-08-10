import About from "./About";
import Nav from "./Nav";
import { Link } from "react-scroll";
import { FaAngleDown } from "react-icons/fa";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import border from "../styles/border.module.css";
import perfil from "../imgs/perfil.png";
import { useInView } from "react-intersection-observer";
import { MotionConfig } from "framer-motion";
import { useAnimation } from "framer-motion";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Home = () => {
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
  return (
    <div
      className="flex flex-col items-center justify-between
    "
    >
      <div ref={ref}>
        {/* pr-96 */}
        <div className="flex flex-col justify-between content-center items-center">
          <div></div>
          <motion.div className="flex flex-row " animate={animation}>
            <motion.div className="flex flex-col items-start border-l-2 border-gray-600 hover:border-gray-400  duration-300 hover:duration-400 pl-6 pr-6">
              <div>
                <p className="text-3xl font-bebas font-bold tracking-wide	">
                  Ezequiel Olivera
                </p>
              </div>
              <div>
                <p className="text-1xl font-bebas ">Barback/Bartender</p>
              </div>
              <div>
                <p> </p>
              </div>
            </motion.div>
            <img src={perfil} className="w-20 h-20" />
          </motion.div>
          <div>
            {screenSize.width > 500 ? (
              <Link to="experience">
                <div className=" ">
                  <BsFillArrowDownCircleFill className="w-8 h-8" />
                </div>
              </Link>
            ) : (
              <Link to="experience">
                <div className=" ">
                  <BsFillArrowDownCircleFill className="w-8 h-8" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
