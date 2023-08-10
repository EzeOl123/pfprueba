import React, { useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { useWindowScroll } from "react-use";
import { useState } from "react";

const NavScroll = () => {
  const { y: pageYOffSet } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (pageYOffSet > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffSet]);
  if (!visible) {
    return false;
  }
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <FaAngleUp className="iconUp" onClick={scrollTop} />
    </div>
  );
};

export default NavScroll;
