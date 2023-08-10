import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { MotionConfig } from "framer-motion";
import { useAnimation } from "framer-motion";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Contact = ({ setPosition }) => {
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
    console.log("Prueba1 =", inView);
    console.log("prueba2", ref);
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
  return (
    <div
      ref={ref}
      className="App flex flex-col items-center content-center justify-center gap-2 "
    >
      <div className="mb-12">
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
              <BsFillArrowUpCircleFill className="w-8 h-8 hover:h-10 hover:w-10 duration-500	hover:duration-500 hover:text-spotify" />
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
            <div className=" ">
              <BsFillArrowUpCircleFill className="w-8 h-8 hover:h-10 hover:w-10 duration-500	hover:duration-500 hover:text-spotify" />
            </div>
          </Link>
        )}
      </div>
      <motion.div
        animate={animation}
        className="flex flex-col items-start border-l-2 border-gray-400 pl-10 pr-20"
      >
        <a
          href="https://github.com/EzeOl123"
          className="hover:opacity-75 duration-300 hover:duration-400 hover:translate-x-2"
        >
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2.0 }}
            className="flex flex-row gap-2 items-center"
          >
            <p className="">CV</p>
            <motion.div
              className="box"
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 0, 180, 360],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <FaFileDownload className="h-4 w-4 duration-300 hover:duration-400 hover:rotate-180" />
            </motion.div>
          </motion.div>
        </a>

        <a
          href="https://www.linkedin.com/in/ezequiel-olivera-valladares-3092b4227/"
          className="hover:opacity-75 duration-300 hover:duration-400 hover:translate-x-2"
        >
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row gap-2 items-center"
          >
            <p>Linkedin</p>
            <motion.div
              className="box"
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 0, 180, 360],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <AiFillLinkedin className="h-5 w-5 duration-300 hover:duration-400 hover:rotate-180" />
            </motion.div>
          </motion.div>
        </a>

        <a
          href="mailto:ezeolivera@gmail.com"
          className="hover:opacity-75 duration-300 hover:duration-400 hover:translate-x-2"
        >
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2.0 }}
            className="flex flex-row gap-2 items-center"
          >
            <p className="">Gmail</p>
            <motion.div
              className="box"
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 0, 180, 360],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <SiGmail className="h-4 w-4 duration-300 hover:duration-400 hover:rotate-180" />
            </motion.div>
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
