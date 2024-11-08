import { SkillListProps } from "../components/SkillList";
import { CSSIcon } from "../Icons/CSSIcon";
import { HTMLIcon } from "../Icons/HTMLIcon";
import { JavaIcon } from "../Icons/JavaIcon";
import { JSIcon } from "../Icons/JSIcon";
import { TSIcon } from "../Icons/TSIcon";

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
];
