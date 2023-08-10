import React from "react";
import Nav from "../Nav";
import { motion } from "framer-motion";
import Projects from "../Projects";
const ProjectsANDNav = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Nav />
      </motion.div>
      <Projects />
    </div>
  );
};

export default ProjectsANDNav;
