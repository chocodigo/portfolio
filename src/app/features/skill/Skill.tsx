"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import { Title } from "@/app/shared/components/Title";
import { JSIcon } from "./Icons/JSIcon";
import { TSIcon } from "./Icons/TSIcon";
import { JavaIcon } from "./Icons/JavaIcon";
import { HTMLIcon } from "./Icons/HTMLIcon";
import { CSSIcon } from "./Icons/CSSIcon";
import { ReactIcon } from "./Icons/ReactIcon";
import { ElectronIcon } from "./Icons/ElectronIcon";
import { NextJSIcon } from "./Icons/NextJSIcon";
import { IonicIcon } from "./Icons/IonicIcon";
import { SassIcon } from "./Icons/SassIcon";
import { StyledComponents } from "./Icons/StyledComponents";
import { MUIIcon } from "./Icons/MUIIcon";
import { DevExtremeIcon } from "./Icons/DevExtremeIcon";
import { MobxIcon } from "./Icons/MobxIcon";
import { RecoilIcon } from "./Icons/RecoilIcon";
import { ZustandIcon } from "./Icons/ZustandIcon";
import { DesignSystemIcon } from "./Icons/DesignSystemIcon";
import { MonorepoIcon } from "./Icons/MonorepoIcon";
import { StorybookIcon } from "./Icons/StorybookIcon";
import { SpringBoot } from "./Icons/SpringBoot";
import { NodeJSIcon } from "./Icons/NodeJSIcon";
import { NestJSIcon } from "./Icons/NestJSIcon";
import { AndroidIcon } from "./Icons/AndroidIcon";
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
      }}
    >
      <Title>Skill</Title>
      <MotionStack>
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
