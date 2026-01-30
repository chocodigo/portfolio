"use client";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { TimeDot } from "./TimeDot";
import GavelIcon from "@mui/icons-material/Gavel";
import BusinessIcon from "@mui/icons-material/Business";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { TeethIcon } from "../Icons/TeethIcon";
import { Avatar } from "@mui/material";

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
        title="삼성전자 NSRM 프로젝트"
        subtitle="웹 프론트엔드 담당 (프리랜서)"
        duration="2025.01 - 2025.10"
        icon={<Avatar sx={{ backgroundColor: "transparent", width: 20, height: 20, fontSize: 14 }}>S</Avatar>}
        isFirst={true}
        highlight="하이브리드 모바일 앱"
      />
      <TimeDot
        title="이마고웍스"
        subtitle="웹 프론트엔드 담당, 백엔드 담당, 웹사이드 CAD 서브담당"
        duration="2023.05 - 2024.09"
        icon={<TeethIcon />}
        highlight="AI 기반 치과 솔루션"
      />
      <TimeDot
        title="원더피플"
        subtitle="웹 프론트엔드 담당"
        duration="2022.02 - 2023.01"
        icon={<SportsEsportsIcon />}
        highlight="게임 UI/UX 개발"
      />
      <TimeDot
        title="나라컨트롤"
        subtitle="웹 프론트엔드, .NET 클라이언트 유지보수 담당, 백엔드 보조"
        duration="2020.08 - 2021.10"
        icon={<BusinessIcon />}
        highlight="대규모 빌딩 제어 시스템"
      />
      <TimeDot
        title="태양법률사무소"
        subtitle="앱 개발, 서버구축, 유지보수"
        duration="2018.03 - 2020.07"
        icon={<GavelIcon />}
        highlight="법률 서비스 플랫폼"
      />
    </Timeline>
  );
};
