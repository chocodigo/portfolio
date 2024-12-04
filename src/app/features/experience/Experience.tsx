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
        padding: { lg: "80px 80px 48px 80px", xs: "48px 24px 16px 24px" },
        gap: "30px",
        borderBottom: "1px solid #DDDDDD",
      }}
    >
      <Title>Experience</Title>
      <ExperienceTimeLine />
    </MotionStack>
  );
};
