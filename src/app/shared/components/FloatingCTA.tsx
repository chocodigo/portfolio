"use client";

import { Fab, Zoom } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const KAKAO_OPEN_CHAT_URL = "https://open.kakao.com/o/sDXbxqNg";

interface FloatingCTAProps {
  show: boolean;
}

export const FloatingCTA = ({ show }: FloatingCTAProps) => {
  const handleClick = () => {
    window.open(KAKAO_OPEN_CHAT_URL, "_blank");
  };

  return (
    <Zoom in={show} unmountOnExit>
      <Fab
        variant="extended"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: { xs: "72px", lg: "80px" },
          right: "20px",
          backgroundColor: "#FEE500",
          color: "#000000",
          fontWeight: 600,
          fontSize: "14px",
          textTransform: "none",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
          "&:hover": {
            backgroundColor: "#FFD700",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
          },
          zIndex: 1000,
        }}
      >
        <ChatIcon sx={{ mr: 1 }} />
        상담하기
      </Fab>
    </Zoom>
  );
};

export default FloatingCTA;
