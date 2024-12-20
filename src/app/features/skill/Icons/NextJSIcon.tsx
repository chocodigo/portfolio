import { motion } from "framer-motion";
import { IconProps } from "../types/iconProps";
import { transition } from "../constants/animation";

export const NextJSIcon: React.FC<IconProps> = ({ isHovered }) => {
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
        <clipPath id="master_svg0_6_0927">
          <rect x="0" y="0" width="30" height="30" rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_6_0927)">
        <g>
          <motion.path
            d="M22.0805,22.0616L12.8252,10L10,10L10,20L12.5,20L12.5,13.6828L20.1086,23.5985C18.6134,24.4886,16.8664,25,15,25C9.47715,25,5,20.5229,5,15C5,9.47715,9.47715,5,15,5C20.5229,5,25,9.47715,25,15C25,17.7566,23.8846,20.2528,22.0805,22.0616ZM15,27.5C21.9035,27.5,27.5,21.9035,27.5,15C27.5,8.096440000000001,21.9035,2.5,15,2.5C8.096440000000001,2.5,2.5,8.096440000000001,2.5,15C2.5,21.9035,8.096440000000001,27.5,15,27.5ZM17.5,15L17.5,10L20,10L20,15L17.5,15Z"
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
