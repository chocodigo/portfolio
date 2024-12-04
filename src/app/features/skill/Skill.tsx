"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import { Title } from "@/app/shared/components/Title";
import { dataList } from "./constants/dataList";
import { SkillList } from "./components/SkillList";

export const Skill = () => {
  return (
    <MotionStack
      sx={{
        background: "#ffffff",
        width: "100%",
        gap: "30px",
        borderBottom: "1px solid #DDDDDD",
        padding: { lg: "80px 80px 48px 80px", xs: "48px 24px 16px 24px" },
        alignItems: { xs: "center", lg: "flex-start" },
      }}
    >
      <Title>Skill</Title>
      <MotionStack sx={{ gap: "30px", width: "100%" }}>
        {dataList.map((item, index) => (
          <SkillList
            title={item.title}
            list={item.list}
            key={`skill_list_${index}`}
          />
        ))}
      </MotionStack>
    </MotionStack>
  );
};
