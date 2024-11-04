"use client";
import { Avatar, Stack, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Avatar src="profile.png" sx={{ width: 85, height: 85 }} />

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
    </Stack>
  );
};
