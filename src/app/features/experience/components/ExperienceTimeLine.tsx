"use client";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { TimeDot } from "./TimeDot";
import GavelIcon from "@mui/icons-material/Gavel";
import BusinessIcon from "@mui/icons-material/Business";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { TeethIcon } from "../Icons/TeethIcon";

export const ExperienceTimeLine = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        padding: 0,
      }}
    >
      <TimeDot
        title="태양법률사무소"
        subtitle="앱 개발, 서버구축, 유지보수"
        duration="2018.03 - 2020.07"
        icon={<GavelIcon />}
        isFirst={true}
      />
      <TimeDot
        title="나라컨트롤"
        subtitle="웹 프론트엔드, .NET 클라이언트 유지보수 담당, 백엔드 보조"
        duration="2020.08 - 2021.10"
        icon={<BusinessIcon />}
      />
      <TimeDot
        title="원더피플"
        subtitle="웹 프론트엔드 담당"
        duration="2022.02 - 2023.01"
        icon={<SportsEsportsIcon />}
      />
      <TimeDot
        title="이마고웍스"
        subtitle="웹 프론트엔드 담당, 백엔드 담당, 웹사이드 cad 서브담당"
        duration="2023.05 - 2024.09"
        icon={<TeethIcon />}
        isEnd={true}
      />
    </Timeline>
  );
};
