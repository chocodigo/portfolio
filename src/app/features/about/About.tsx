"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import MotionTypography from "@/app/shared/components/MotionTypography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Title } from "@/app/shared/components/Title";

export const About = () => {
  return (
    <MotionStack
      sx={{
        width: "100%",
        background: "#fff",
        padding: { lg: "80px 80px 48px 80px", xs: "48px 24px 16px 24px" },
        flexDirection: { lg: "row", xs: "column-reverse" },
        justifyContent: { lg: "space-between" },
        alignItems: { xs: "center", lg: "flex-start" },
        borderBottom: "1px solid #DDDDDD",
        gap: {xs: '10px'}
      }}
    >
      <MotionStack
        sx={{
          alignItems: { xs: "center", lg: "flex-start" },
          
        }}
      >
        <Title>소개</Title>

        <MotionStack
          sx={{ gap: "15px", textAlign: { xs: "center", lg: "left" } }}
        >
          <MotionTypography sx={{ fontSize: "14px", color: "#636363" }}>
            웹 개발자 최해림입니다.
            <br />
            빠르고 정확한 결과물을 위해 노력합니다.
            <br />
            <br />
            웹 개발, 홈페이지 개발, 앱 개발, 외주를 하고 있습니다.
            <br />
            <br />
            충북대학교 <br />
            소프트웨어학과 전공
          </MotionTypography>
          <MotionStack sx={{ gap: "8px" }}>
            <MotionStack sx={{ gap: "4px" }}>
              <MotionTypography
                sx={{ fontSize: "10px", color: "#636363", fontWeight: "300" }}
              >
                Email
              </MotionTypography>
              <MotionTypography
                sx={{ fontSize: "10px", color: "#636363", fontWeight: "300" }}
              >
                cocoa1149@gmail.com
              </MotionTypography>
            </MotionStack>
          </MotionStack>

          <MotionStack
            sx={{
              flexDirection: "row",
              gap: "10px",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <IconButton
              sx={{ padding: 0, width: "20px", height: "20px" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/haerim-choi-ab782b261")
              }
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              sx={{ padding: 0, width: "20px", height: "20px" }}
              onClick={() => window.open("https://github.com/chocodigo")}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              sx={{ padding: 0, width: "20px", height: "20px" }}
              onClick={() => window.open("https://open.kakao.com/o/sDXbxqNg")}
            >
              <ChatBubbleIcon fontSize="small" />
            </IconButton>
          </MotionStack>
        </MotionStack>
      </MotionStack>
      <MotionStack
        sx={{
          width: "200px",
          height: "200px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          boxSizing: "border-box",
          border: "1px solid #DDDDDD",
        }}
      >
        <MotionStack
          sx={{
            padding: "10px",
            borderRadius: "50%",
            background: "url(computer.png)",
            width: "180px",
            height: "180px",
          }}
        />
      </MotionStack>
    </MotionStack>
  );
};
