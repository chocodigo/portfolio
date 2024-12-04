import { motion } from "framer-motion";
import { IconProps } from "../types/iconProps";
import { transition } from "../constants/animation";

export const HTMLIcon: React.FC<IconProps> = ({ isHovered }) => {
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
        <clipPath id="master_svg0_6_0824">
          <rect x="0" y="0" width="30" height="30" rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_6_0824)">
        <g>
          <motion.path
            d="M15,22.7222L9.226040000000001,21.1527L8.814630000000001,16.7222L11.65195,16.7222L11.85056,19.0278L15,19.8611L18.1494,19.0278L18.4757,15.4445L8.701139999999999,15.4445L7.90669,7.09723L22.0934,7.09723L21.8096,9.86111L11.02774,9.86111L11.283100000000001,12.6805L21.5543,12.6805L20.774,21.1527L15,22.7222ZM3.75,2.5L26.25,2.5L24.2213,25L15,27.5L5.77869,25L3.75,2.5ZM6.48555,5L8.11233,23.0424L15,24.9097L21.8876,23.0424L23.5145,5L6.48555,5Z"
            fill="#FFFFFF"
            fillOpacity="1"
            stroke="rgba(255, 255, 255, 0.69)"
            initial={{ pathLength: isHovered ? 0.001 : 1, strokeOpacity: 0 }}
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
