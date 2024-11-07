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
      <MotionStack sx={{ background: "black" }}>
        <JSIcon />
        <TSIcon />
        <JavaIcon />
        <HTMLIcon />
        <CSSIcon />
        <ReactIcon />
        <ElectronIcon />
        <NextJSIcon />
        <IonicIcon />
        <SassIcon />
      </MotionStack>
    </MotionStack>
  );
};
