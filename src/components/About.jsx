import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import border from "../styles/border.module.css";
import perfil from "../imgs/perfil.png";
import { useInView } from "react-intersection-observer";
import { MotionConfig } from "framer-motion";
import { useAnimation } from "framer-motion";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const About = () => {
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
    <div ref={ref} className="whats">
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
      {/* <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 3.0 }}
      > */}

      {/* <motion.div
          className="box"
          animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 0, 180, 360],
            borderRadius: ["0%", "0%", "0%", "0%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <div className="flex flex-col items-center	justify-center content-center border-b-2 border-red-300	w-24 h-24 rounded-full"></div>
        </motion.div> */}
    </div>
  );
};

export default About;
