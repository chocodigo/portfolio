"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import { Title } from "@/app/shared/components/Title";
import { ExperienceTimeLine } from "./components/ExperienceTimeLine";

export const Experience = () => {
  return (
    <MotionStack
      sx={{
        background: "#ffffff",
        width: "100%",
        padding: "80px 80px 48px 80px",
        gap: "30px",
        borderBottom: "1px solid #DDDDDD",
      }}
    >
      <Title>Experience</Title>
      <ExperienceTimeLine />
    </MotionStack>
  );
};
