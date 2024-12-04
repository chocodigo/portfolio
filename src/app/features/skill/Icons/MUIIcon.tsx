import { motion } from "framer-motion";
import { IconProps } from "../types/iconProps";
import { transition } from "../constants/animation";

export const MUIIcon: React.FC<IconProps> = ({ isHovered }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      version="1.1"
      width="30"
      height="30.000001907348633"
      viewBox="0 0 30 30.000001907348633"
    >
      <defs>
        <clipPath id="master_svg0_6_0647">
          <rect x="0" y="0" width="30" height="30.000001907348633" rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_6_0647)">
        <g></g>
        <g>
          <motion.path
            d="M10,20.76259765625L10,19.21259765625L17.5,14.88759765625L17.5,9.03759765625L11.25,12.65009765625L5,9.03759765625L5,16.25009765625L3.75,16.97509765625L2.5,16.25009765625L2.5,6.25009765625L3.8375,5.47509765625L11.25,9.76259765625L16.1625,6.92509765625L18.6625,5.475098228455L20,6.25009765625L20,16.32509765625L13.65,20.00009765625L18.75,22.91259765625L25,19.28759765625L25,13.75009765625L26.25,13.02509765625L27.5,13.75009765625L27.5,20.72509765625L18.75,25.80009765625L10,20.80009765625M27.5,12.18759765625L26.25,12.91259765625L25,12.18759765625L25,10.72509765625L26.25,10.00009765625L27.5,10.72509765625L27.5,12.18759765625Z"
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
