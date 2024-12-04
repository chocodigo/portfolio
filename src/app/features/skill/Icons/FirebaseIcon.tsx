import { motion } from "framer-motion";
import { IconProps } from "../types/iconProps";
import { transition } from "../constants/animation";

export const FirebaseIcon: React.FC<IconProps> = ({ isHovered }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="30px"
      height="30px"
      viewBox="0 0 32 32"
    >
      <motion.path
        fill="#ffffff"
        d="M18.874 9.935l-2.274-4.351c-0.116-0.217-0.341-0.363-0.6-0.363s-0.484 0.145-0.598 0.359l-0.002 0.004-9.985 17.894zM26.852 25.202l-2.812-17.495c-0.052-0.325-0.331-0.571-0.667-0.571-0.189 0-0.359 0.077-0.482 0.202l-0 0-17.744 17.865 9.817 5.532c0.286 0.163 0.628 0.26 0.992 0.26s0.707-0.096 1.002-0.265l-0.010 0.005zM5.865 20.589l2.955-19.008c0.051-0.328 0.331-0.577 0.67-0.577 0.258 0 0.483 0.144 0.597 0.357l0.002 0.004 3.178 5.962z"
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
    </svg>
  );
};
