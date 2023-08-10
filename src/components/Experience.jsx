import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experience = () => {
  let imgs = [
    "https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/typescript-%231572B6.svg?style=for-the-badge&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/react-%234285F4.svg?style=for-the-badge&logo=react&logoColor=white",
    "https://img.shields.io/badge/redux-7A7ADB.svg?style=for-the-badge&logo=redux&logoColor=white",
    "https://img.shields.io/badge/tailwind-%234285F4.svg?style=for-the-badge&logo=tailwind&logoColor=white",
  ];
  let imgs2 = [
    "https://img.shields.io/badge/nodejs-%23054020.svg?style=for-the-badge&logo=javascript&logoColor=white",
    "https://img.shields.io/badge/express-%23054020.svg?style=for-the-badge&logo=javascript&logoColor=white",
    "https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/typescript-%231572B6.svg?style=for-the-badge&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/Postgresql-%231572B6.svg?style=for-the-badge&logo=Postgresql&logoColor=white",
    "https://img.shields.io/badge/mongodb-%23054020.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/JWT-%23121011.svg?style=for-the-badge&logo=JWT&logoColor=black",
  ];
  let durationchanged1 = 1.5;
  let durationchanged2 = 1.5;
  return (
    <div className="flex flex-row gap-4 justify-center mt-6">
      <div>
        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="font-bold text-base border-b-2 px-2">FRONT END</p>
        </motion.div>
        <div className="flex flex-col gap-2 mt-2">
          {imgs.map((x) => {
            durationchanged1 = durationchanged1 + 0.2;
            return (
              <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: durationchanged1 }}
              >
                <img
                  className="h-4 pl-1 hover:opacity-75 duration-300 hover:duration-400 hover:translate-x-2"
                  src={x}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="font-bold text-base border-b-2 px-2">BACK END</p>
        </motion.div>
        <div className="flex flex-col items-end gap-2 mt-2">
          {imgs2.map((x) => {
            durationchanged2 = durationchanged2 + 0.2;
            return (
              <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: durationchanged2 }}
              >
                <img
                  className="h-4 pl-1 hover:opacity-75 duration-300 hover:duration-400 hover:-translate-x-2"
                  src={x}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
