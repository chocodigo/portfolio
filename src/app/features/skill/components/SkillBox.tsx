"use client";

import MotionStack from "@/app/shared/components/MotionStack";

interface IProps {
  name: string;
  icon: React.ReactNode;
}

export const SkillBox = ({ name, icon }: IProps) => {
  return (
    <MotionStack>
      {icon}
      {name}
    </MotionStack>
  );
};
