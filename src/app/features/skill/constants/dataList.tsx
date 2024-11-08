import { SkillListProps } from "../components/SkillList";
import { AndroidIcon } from "../Icons/AndroidIcon";
import { CSSIcon } from "../Icons/CSSIcon";
import { DesignSystemIcon } from "../Icons/DesignSystemIcon";
import { DevExtremeIcon } from "../Icons/DevExtremeIcon";
import { ElectronIcon } from "../Icons/ElectronIcon";
import { HTMLIcon } from "../Icons/HTMLIcon";
import { IonicIcon } from "../Icons/IonicIcon";
import { JavaIcon } from "../Icons/JavaIcon";
import { JSIcon } from "../Icons/JSIcon";
import { MobxIcon } from "../Icons/MobxIcon";
import { MonorepoIcon } from "../Icons/MonorepoIcon";
import { MUIIcon } from "../Icons/MUIIcon";
import { NestJSIcon } from "../Icons/NestJSIcon";
import { NextJSIcon } from "../Icons/NextJSIcon";
import { NodeJSIcon } from "../Icons/NodeJSIcon";
import { ReactIcon } from "../Icons/ReactIcon";
import { RecoilIcon } from "../Icons/RecoilIcon";
import { SassIcon } from "../Icons/SassIcon";
import { SpringBoot } from "../Icons/SpringBoot";
import { StorybookIcon } from "../Icons/StorybookIcon";
import { StyledComponents } from "../Icons/StyledComponents";
import { TSIcon } from "../Icons/TSIcon";
import { ZustandIcon } from "../Icons/ZustandIcon";

export const dataList: SkillListProps[] = [
  {
    title: "Languages and Core Technologies",
    list: [
      { icon: <JSIcon />, name: "Javascript" },
      { icon: <TSIcon />, name: "Typescript" },
      { icon: <JavaIcon />, name: "Java" },
      { icon: <HTMLIcon />, name: "HTML" },
      { icon: <CSSIcon />, name: "CSS" },
    ],
  },
  {
    title: "Frontend Frameworks and Libraries",
    list: [
      { icon: <ReactIcon />, name: "React.js" },
      { icon: <ElectronIcon />, name: "Electron" },
      { icon: <NextJSIcon />, name: "Next.js" },
      { icon: <IonicIcon />, name: "ionic" },
    ],
  },
  {
    title: "Styling Tools and Libraries",
    list: [
      { icon: <SassIcon />, name: "Sass" },
      { icon: <StyledComponents />, name: "styled components" },
      { icon: <MUIIcon />, name: "MUI library" },
      { icon: <DevExtremeIcon />, name: "DevExtreme library" },
    ],
  },
  {
    title: "State Management Libraries",
    list: [
      { icon: <ReactIcon />, name: "Context API" },
      { icon: <MobxIcon />, name: "Mobx" },
      { icon: <RecoilIcon />, name: "Recoil" },
      { icon: <ZustandIcon />, name: "Zustand" },
    ],
  },
  {
    title: "Build and Module Management",
    list: [
      { icon: <DesignSystemIcon />, name: "Design System" },
      { icon: <MonorepoIcon />, name: "Monorepo" },
      { icon: <StorybookIcon />, name: "Storybook" },
    ],
  },
  {
    title: "Backend Technologies",
    list: [
      { icon: <SpringBoot />, name: "Spring Boot" },
      { icon: <NodeJSIcon />, name: "Node.js" },
      { icon: <NestJSIcon />, name: "NestJS" },
    ],
  },
  {
    title: "Mobile and Hybrid Applications",
    list: [
      { icon: <IonicIcon />, name: "ionic" },
      { icon: <AndroidIcon />, name: "Android" },
    ],
  },
];
