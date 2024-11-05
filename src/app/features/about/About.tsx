"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import MotionTypography from "@/app/shared/components/MotionTypography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CallIcon from "@mui/icons-material/Call";
import { Title } from "@/app/shared/components/Title";

export const About = () => {
  return (
    <MotionStack
      sx={{
        width: "100%",
        padding: "80px 80px 48px 80px",
        background: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: "1px solid #DDDDDD",
      }}
    >
      <MotionStack>
        <Title>About</Title>

        <MotionStack sx={{ gap: "15px" }}>
          <MotionTypography sx={{ fontSize: "14px", color: "#636363" }}>
            웹 개발자 최해림입니다.
            <br />
            빠르고 정확한 결과물을 위해 노력합니다.
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
                Phone Number
              </MotionTypography>
              <MotionTypography
                sx={{ fontSize: "10px", color: "#636363", fontWeight: "300" }}
              >
                010-2741-1149
              </MotionTypography>
            </MotionStack>
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

          <MotionStack sx={{ flexDirection: "row", gap: "10px" }}>
            <IconButton sx={{ padding: 0, width: "20px", height: "20px" }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ padding: 0, width: "20px", height: "20px" }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ padding: 0, width: "20px", height: "20px" }}>
              <ChatBubbleIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ padding: 0, width: "20px", height: "20px" }}>
              <CallIcon fontSize="small" />
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
