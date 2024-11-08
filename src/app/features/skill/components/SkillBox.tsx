"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import MotionTypography from "@/app/shared/components/MotionTypography";

export interface SkillBoxProps {
  name: string;
  icon: React.ReactNode;
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
  return (
    <MotionStack
      sx={{
        width: "100px",
        height: "100px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColorList[index % 5],
        color: "#ffffff",
        borderTopLeftRadius: index === 0 ? "8px" : 0,
        borderBottomLeftRadius: index === 0 ? "8px" : 0,
        borderTopRightRadius: isLast ? "8px" : 0,
        borderBottomRightRadius: isLast ? "8px" : 0,
      }}
    >
      {icon}
      <MotionTypography sx={{ fontSize: "12px" }}>{name}</MotionTypography>
    </MotionStack>
  );
};
