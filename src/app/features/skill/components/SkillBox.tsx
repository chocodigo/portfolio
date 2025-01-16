"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import MotionTypography from "@/app/shared/components/MotionTypography";
import React, { useState } from "react";
import { IconProps } from "../types/iconProps";

export interface SkillBoxProps {
  name: string;
  icon: React.ReactElement<IconProps>;
  index: number;
  isLast: boolean;
}

const backgroundColorList = [
  "#EFA8B0",
  "#C79CC8",
  "#A89CC8",
  "#9BB2E1",
  "#8CC9F0",
];

export const SkillBox = ({ name, icon, index, isLast }: SkillBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionStack
      sx={{
        width: { lg: "100px", xs: "80px" },
        height: { lg: "100px", xs: "80px" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColorList[index % 5],
        color: "#ffffff",
        borderTopLeftRadius: index === 0 ? "8px" : 0,

        borderBottomLeftRadius: index === 0 ? "8px" : 0,
        borderTopRightRadius: isLast ? "8px" : 0,
        borderBottomRightRadius: isLast ? "8px" : 0,
        textAlign: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.isValidElement(icon) && React.cloneElement(icon, { isHovered })}
      <MotionTypography sx={{ fontSize: "12px" }}>{name}</MotionTypography>
    </MotionStack>
  );
};
