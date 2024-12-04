"use client";
import MotionStack from "@/app/shared/components/MotionStack";
import { Avatar, Stack, Typography } from "@mui/material";

export const Header = () => {
  return (
    <MotionStack sx={{ alignItems: "center" }}>
      <MotionStack
        initial={{ opacity: 0, scale: 0, rotate: "-30deg" }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
      >
        <Avatar src="profile.png" sx={{ width: 85, height: 85 }} />
      </MotionStack>

      <MotionStack
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        sx={{ alignItems: "center" }}
      >
        <Typography
          sx={{ marginTop: "24px", color: "#FDF4FF", fontSize: "32px" }}
          variant="h1"
        >
          Haerim Choi
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "4px",
            color: "#FDF4FF",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          다양한 프로젝트 경험을 가진 웹 개발자입니다.
          <br />
          AI 솔루션, 빌딩제어 솔루션, 어플리케이션, 게임 UI 등
        </Typography>
      </MotionStack>
    </MotionStack>
  );
};
