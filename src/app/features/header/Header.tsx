"use client";
import MotionStack from "@/app/shared/components/MotionStack";
import { Button, Chip, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const KAKAO_OPEN_CHAT_URL = "https://open.kakao.com/o/sDXbxqNg";

const HIGHLIGHT_TAGS = [
  "삼성전자 협업",
  "AI 솔루션",
  "빌딩 제어",
  "게임 UI",
];

export const Header = () => {
  const handleKakaoClick = () => {
    window.open(KAKAO_OPEN_CHAT_URL, "_blank");
  };

  return (
    <MotionStack sx={{ alignItems: "center", gap: "24px" }}>
      <MotionStack
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{ alignItems: "center" }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#FDF4FF",
            fontSize: { xs: "48px", lg: "64px" },
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          최해림
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(253, 244, 255, 0.7)",
            fontSize: "14px",
            marginTop: "4px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Frontend Developer
        </Typography>
      </MotionStack>

      <MotionStack
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        sx={{ alignItems: "center", textAlign: "center" }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#FDF4FF",
            fontSize: { xs: "18px", lg: "22px" },
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          AI, 게임, IoT까지 —
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#FDF4FF",
            fontSize: { xs: "18px", lg: "22px" },
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          7년차 풀스택 개발자의 빠르고 정확한 결과물
        </Typography>
      </MotionStack>

      <MotionStack
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
          maxWidth: "400px",
        }}
      >
        {HIGHLIGHT_TAGS.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              color: "#FDF4FF",
              fontSize: "12px",
              fontWeight: 500,
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              },
            }}
          />
        ))}
      </MotionStack>

      <MotionStack
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button
          variant="contained"
          startIcon={<ChatIcon />}
          onClick={handleKakaoClick}
          sx={{
            backgroundColor: "#FEE500",
            color: "#000000",
            fontSize: "15px",
            fontWeight: 600,
            padding: "12px 28px",
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "0 4px 14px rgba(254, 229, 0, 0.4)",
            "&:hover": {
              backgroundColor: "#FFD700",
              boxShadow: "0 6px 20px rgba(254, 229, 0, 0.5)",
            },
          }}
        >
          카카오톡으로 상담하기
        </Button>
      </MotionStack>
    </MotionStack>
  );
};
