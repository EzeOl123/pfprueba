import React from "react";
import Contact from "../Contact";
import Nav from "../Nav";
import { motion } from "framer-motion";

const ContactANDNav = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Nav />
      </motion.div>
      <Contact />
    </div>
  );
};

export default ContactANDNav;
