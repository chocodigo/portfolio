import { motion } from "framer-motion";
import { transition } from "../constants/animation";
import { IconProps } from "../types/iconProps";

export const DesignSystemIcon: React.FC<IconProps> = ({ isHovered }) => {
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
        <clipPath id="master_svg0_6_2333">
          <rect x="0" y="0" width="30" height="30" rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_6_2333)">
        <g>
          <motion.path
            d="M16.610799999999998,7.76598359375L22.7847,2.96399859375C23.2824,2.57697459375,23.9902,2.62104909375,24.436,3.06681159375L28.1787,6.80956359375C28.6246,7.25532359375,28.6686,7.96325359375,28.2816,8.46086359375L23.4809,14.63318359375C23.8473,16.11858359375,23.8545,17.714883593750002,23.4305,19.29708359375C22.3079,23.48688359375,18.5177,26.24798359375,14.377,26.24798359375C10,26.24798359375,4.375,24.37058359375,1.25,22.49558359375C6.22473,18.74558359375,5.05903,16.48288359375,5.625,14.37058359375C6.94804,9.43295359375,11.6778,6.54891359375,16.610799999999998,7.76598359375ZM20.8769,10.11423359375C20.9591,10.19355359375,21.0399,10.27427359375,21.119,10.35638359375L22.5371,11.77452359375L25.6308,7.79705359375L23.4486,5.61485359375L19.4711,8.70845359375L20.8769,10.11423359375Z"
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
