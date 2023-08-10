import React from "react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import aboutmerealimg from "../imgs/messi.png";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
const Aboutmereal = ({ setPosition }) => {
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

  return (
    <div className="App flex flex-col items-center content-center justify-center gap-2  ">
      <Link
        to="experience"
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => {
          setPosition("1");
        }}
      >
        <div className="mb-6 md:mb-24 ">
          <BsFillArrowUpCircleFill className="w-8 h-8 hover:h-10 hover:w-10 duration-500	hover:duration-500 hover:text-spotify" />
        </div>
      </Link>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="w-4/5 md:w-1/5 text-start bg-black">
          <h3 className="">
            I'm a 20-year-old Hotel Management student on a journey of learning
            and growth. Alongside my studies, I've spent 8 months immersing
            myself in the world of hospitality as a barback and bartender.
            Crafting drinks and creating memorable experiences has fueled my
            passion for this industry. Join me as I blend the art of mixology
            with the science of hotel management. 🍹🏨
          </h3>
        </div>
        <div className="md:ml-28 md:mr-40 w-40 bg-red ">
          <img src={aboutmerealimg} />
        </div>
      </div>
      <Link
        to="contact"
        smooth={true}
        offset={0}
        duration={500}
        onClick={() => {
          setPosition("3");
        }}
      >
        <div className="mt-6 md:mt-24">
          <BsFillArrowDownCircleFill className="w-8 h-8 hover:h-10 hover:w-10 duration-500	hover:duration-500 hover:text-spotify" />
        </div>
      </Link>
    </div>
  );
};

export default Aboutmereal;
