import React from "react";
import Nav from "../Nav";
import { motion } from "framer-motion";
import Skills from "../Skills";
import { FaGlassMartiniAlt } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const SkillsANDNav = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Nav />
      </motion.div>
      <div className="experience mt-16">
        <VerticalTimeline lineColor="#000 ">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#0d1729", color: "#fff" }}
            icon={<FaGlassMartiniAlt />}
            date="2023 Jan - Present"
          >
            <p>holaajajasjsaj</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SkillsANDNav;
