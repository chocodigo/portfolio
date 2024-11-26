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
        padding: "80px 80px 48px 80px",
        gap: "30px",
        borderBottom: "1px solid #DDDDDD",
      }}
    >
      <Title>Skill</Title>
      <MotionStack sx={{ gap: "30px" }}>
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
