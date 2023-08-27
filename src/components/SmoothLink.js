// components/SmoothScrollLink.js
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";

const SmoothScrollLink = ({ to, children, className }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/#${to}`);
  };

  return (
    <ScrollLink
      to={to}
      className={className}
      smooth={true}
      duration={700}
      onClick={handleClick}
    >
      {children}
    </ScrollLink>
  );
};

export default SmoothScrollLink;
