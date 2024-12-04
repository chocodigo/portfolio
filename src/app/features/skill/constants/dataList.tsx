import { SkillListProps } from "../components/SkillList";
import { AndroidIcon } from "../Icons/AndroidIcon";
import { AWSIcon } from "../Icons/AWSIcon";
import { AzureIcon } from "../Icons/AzureIcon";
import { CSSIcon } from "../Icons/CSSIcon";
import { DesignSystemIcon } from "../Icons/DesignSystemIcon";
import { DevExtremeIcon } from "../Icons/DevExtremeIcon";
import { ElectronIcon } from "../Icons/ElectronIcon";
import { FirebaseIcon } from "../Icons/FirebaseIcon";
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
      { icon: <JSIcon isHovered={false} />, name: "Javascript" },
      { icon: <TSIcon isHovered={false} />, name: "Typescript" },
      { icon: <JavaIcon isHovered={false} />, name: "Java" },
      { icon: <HTMLIcon isHovered={false} />, name: "HTML" },
      { icon: <CSSIcon isHovered={false} />, name: "CSS" },
    ],
  },
  {
    title: "Frontend Frameworks and Libraries",
    list: [
      { icon: <ReactIcon isHovered={false} />, name: "React.js" },
      { icon: <ElectronIcon isHovered={false} />, name: "Electron" },
      { icon: <NextJSIcon isHovered={false} />, name: "Next.js" },
      { icon: <IonicIcon isHovered={false} />, name: "ionic" },
    ],
  },
  {
    title: "Styling Tools and Libraries",
    list: [
      { icon: <SassIcon isHovered={false} />, name: "Sass" },
      {
        icon: <StyledComponents isHovered={false} />,
        name: "styled components",
      },
      { icon: <MUIIcon isHovered={false} />, name: "MUI library" },
      {
        icon: <DevExtremeIcon isHovered={false} />,
        name: "DevExtreme library",
      },
    ],
  },
  {
    title: "State Management Libraries",
    list: [
      { icon: <ReactIcon isHovered={false} />, name: "Context API" },
      { icon: <MobxIcon isHovered={false} />, name: "Mobx" },
      { icon: <RecoilIcon isHovered={false} />, name: "Recoil" },
      { icon: <ZustandIcon />, name: "Zustand" },
    ],
  },
  {
    title: "Build and Module Management",
    list: [
      { icon: <DesignSystemIcon isHovered={false} />, name: "Design System" },
      { icon: <MonorepoIcon isHovered={false} />, name: "Monorepo" },
      { icon: <StorybookIcon isHovered={false} />, name: "Storybook" },
    ],
  },
  {
    title: "Backend Technologies",
    list: [
      { icon: <SpringBoot isHovered={false} />, name: "Spring Boot" },
      { icon: <NodeJSIcon isHovered={false} />, name: "Node.js" },
      { icon: <NestJSIcon isHovered={false} />, name: "NestJS" },
    ],
  },
  {
    title: "Mobile and Hybrid Applications",
    list: [
      { icon: <IonicIcon isHovered={false} />, name: "ionic" },
      { icon: <AndroidIcon isHovered={false} />, name: "Android" },
    ],
  },
  {
    title: "Cloud",
    list: [
      { icon: <AWSIcon isHovered={false} />, name: "AWS" },
      { icon: <FirebaseIcon isHovered={false} />, name: "firebase" },
      { icon: <AzureIcon isHovered={false} />, name: "Azure" },
    ],
  },
];
