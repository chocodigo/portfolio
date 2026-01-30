"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import { Button, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const KAKAO_OPEN_CHAT_URL = "https://open.kakao.com/o/sDXbxqNg";

export const Footer = () => {
  const handleKakaoClick = () => {
    window.open(KAKAO_OPEN_CHAT_URL, "_blank");
  };

  return (
    <MotionStack
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #1E1B4B 0%, #2D2A5E 100%)",
        padding: { lg: "80px 80px 48px 80px", xs: "48px 24px 32px 24px" },
        alignItems: "center",
        gap: "24px",
        borderRadius: "0 0 4px 4px",
      }}
    >
      <MotionStack sx={{ alignItems: "center", gap: "12px" }}>
        <Typography
          sx={{
            fontSize: { xs: "22px", lg: "28px" },
            fontWeight: 600,
            color: "#FDF4FF",
            textAlign: "center",
          }}
        >
          프로젝트가 있으신가요?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "16px" },
            color: "rgba(253, 244, 255, 0.8)",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          아이디어 단계부터 유지보수까지,
          <br />
          함께 만들어 드립니다.
        </Typography>
      </MotionStack>

      <Button
        variant="contained"
        startIcon={<ChatIcon />}
        onClick={handleKakaoClick}
        sx={{
          backgroundColor: "#FEE500",
          color: "#000000",
          fontSize: "15px",
          fontWeight: 600,
          padding: "14px 32px",
          borderRadius: "8px",
          textTransform: "none",
          boxShadow: "0 4px 14px rgba(254, 229, 0, 0.4)",
          "&:hover": {
            backgroundColor: "#FFD700",
            boxShadow: "0 6px 20px rgba(254, 229, 0, 0.5)",
          },
        }}
      >
        무료 상담 신청하기
      </Button>

      <Typography
        sx={{
          fontSize: "12px",
          color: "rgba(253, 244, 255, 0.5)",
          marginTop: "24px",
        }}
      >
        © 2025 Haerim Choi. All rights reserved.
      </Typography>
    </MotionStack>
  );
};
