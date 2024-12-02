import { motion } from "framer-motion";
import { IconProps } from "../types/iconProps";
import { transition } from "../constants/animation";

export const CSSIcon: React.FC<IconProps> = ({ isHovered }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      version="1.1"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <defs>
        <clipPath id="master_svg0_6_0834">
          <rect x="0" y="0" width="30" height="30" rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_6_0834)">
        <g>
          <motion.path
            d="M3.5,17.5L6.04951,17.5L5.36838,20.9056L12.5491,23.5984L21.5831,20.5871L22.9505,13.75L4.25,13.75L4.75,11.25L23.4505,11.25L24.4505,6.25L5.75,6.25L6.25,3.75L27.5,3.75L23.75,22.5L12.5,26.25L2.5,22.5L3.5,17.5Z"
            fill="#FFFFFF"
            fillOpacity="1"
            stroke="rgba(255, 255, 255, 0.69)"
            initial={{ pathLength: isHovered ? 0.001 : 1 }}
            animate={{
              pathLength: isHovered ? 1 : 0,
              fillOpacity: isHovered ? [0, 1] : 1,
              strokeOpacity: isHovered ? 0 : 1,
            }}
            transition={transition}
          />
        </g>
      </g>
    </svg>
  );
};
