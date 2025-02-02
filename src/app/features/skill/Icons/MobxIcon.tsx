import { motion } from "framer-motion";
import { IconProps } from "../types/iconProps";
import { transition } from "../constants/animation";

export const MobxIcon: React.FC<IconProps> = ({ isHovered }) => {
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
        <clipPath id="master_svg0_6_0660">
          <rect x="0" y="0" width="30" height="30.000001907348633" rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_6_0660)">
        <g>
          <g>
            <motion.path
              d="M29.99993974609375,27.7025265625L29.99993974609375,2.2977865625C29.99993974609375,1.2555965625,29.30593974609375,0.3760365625,28.35493974609375,0.0947265625L27.27513974609375,0.7408775625L15.29097774609375,13.5186265625L14.91526374609375,14.6930265625L14.69573974609375,15.8202265625L18.43279974609375,29.7866265625L19.01101974609375,30.0001265625L27.70233974609375,30.0001265625C28.97133974609375,30.0001265625,29.99993974609375,28.9714265625,29.99993974609375,27.7025265625Z"
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
          <g>
            <motion.path
              d="M0,2.29764L0,27.7024C0,28.488,0.394524,29.1812,0.995992,29.5955L1.7329,29.2426L14.418,15.6614L14.9153,14.6929L14.9339,13.7566L11.4815,0.621683L10.9587,0.000015873L2.29762,0.000015873C1.02869,0.000015873,0,1.02871,0,2.29764Z"
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
          <g>
            <motion.path
              d="M14.915259716796875,14.6929L28.355009716796875,0.0946032C28.148009716796874,0.033373,27.929109716796876,0,27.702409716796875,0L10.958709716796875,0L14.915259716796875,14.6929Z"
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
          <g>
            <motion.path
              d="M2.2976321972656253,29.99997109375L19.011002197265626,29.99997109375L14.915202197265625,14.69287109375L0.996002197265625,29.59557109375C1.366042197265625,29.850471093750002,1.8142961972656249,29.99997109375,2.2976321972656253,29.99997109375Z"
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
          <g>
            <motion.path
              d="M11.12322947265625,11.3706703125L12.790259472656249,11.3706703125C13.45441947265625,13.8769003125,14.21037947265625,16.0761103125,15.05374947265625,18.0604203125C16.00905947265625,15.8278903125,16.70925947265625,13.6272203125,17.30205947265625,11.3706703125L18.87725947265625,11.3706703125C18.171759472656248,14.1745203125,17.01775947265625,17.0003503125,15.69775947265625,19.9171203125L14.30441947265625,19.9171203125C13.03648947265625,17.1531203125,11.95703947265625,14.3112603125,11.12322947265625,11.3706703125ZM5.62480847265625,7.0283203125L9.33151947265625,7.0283203125L9.33151947265625,22.9233203125L5.60845947265625,22.9233203125L5.60845947265625,21.6980203125L7.890209472656251,21.6980203125L7.890209472656251,8.2209403125L5.62480847265625,8.2209403125L5.62480847265625,7.0283203125ZM24.39455947265625,8.2209503125L22.12915947265625,8.2209503125L22.12915947265625,21.6980203125L24.41085947265625,21.6980203125L24.41085947265625,22.9233203125L20.68785947265625,22.9233203125L20.68785947265625,7.0283323288L24.39455947265625,7.0283323288L24.39455947265625,8.2209503125Z"
              fill="#C79CC8"
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
      </g>
    </svg>
  );
};
