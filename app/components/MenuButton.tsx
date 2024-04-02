import React from "react";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  color?: string;
  strokeWidth?: number;
}

const MenuButton: React.FC<Props> = ({
  isOpen,
  color = "#464455",
  strokeWidth = 2,
}) => {
  const variant = isOpen ? "opened" : "closed";
  const lineVariants = {
    closed: {
      opacity: 1,
      pathLength: 1
    },
    opened: {
      opacity: 0,
      pathLength: 0
    }
  };
  const topLineVariants = {
    closed: {
      d: "M5 8H13.75",
      opacity: 1,
      pathLength: 1
    },
    opened: {
      d: "M3 3L21 21",
      opacity: 1,
      pathLength: 1
    }
  };
  const bottomLineVariants = {
    closed: {
      d: "M10.25 16L19 16",
      opacity: 1,
      pathLength: 1
    },
    opened: {
      d: "M3 21L21 3",
      opacity: 1,
      pathLength: 1
    }
  };

  return (
    <motion.svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="closed"
      animate={variant}
    >
      <motion.path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth={strokeWidth}
        variants={topLineVariants}
      />
      <motion.path
        d="M5 12H19"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth={strokeWidth}
        variants={lineVariants}
      />
      <motion.path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth={strokeWidth}
        variants={bottomLineVariants}
      />
    </motion.svg>
  );
};

export { MenuButton };
