import MotionStack from "@/app/shared/components/MotionStack";
import { SkillBox, SkillBoxProps } from "./SkillBox";
import MotionTypography from "@/app/shared/components/MotionTypography";

export interface SkillListProps {
  title: string;
  list: Omit<SkillBoxProps, "index" | "isLast">[];
}

export const SkillList = ({ title, list }: SkillListProps) => {
  return (
    <MotionStack sx={{ gap: "10px" }}>
      <MotionTypography sx={{ fontSize: "14px" }}>{title}</MotionTypography>
      <MotionStack sx={{ flexDirection: { lg: "row", xs: "column" } }}>
        {list.map((item, index) => (
          <SkillBox
            key={`SKillBox_${index}`}
            icon={item.icon}
            index={index}
            name={item.name}
            isLast={index === list.length - 1}
          />
        ))}
      </MotionStack>
    </MotionStack>
  );
};
