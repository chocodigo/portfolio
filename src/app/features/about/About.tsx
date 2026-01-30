"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import MotionTypography from "@/app/shared/components/MotionTypography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { Title } from "@/app/shared/components/Title";

const KAKAO_OPEN_CHAT_URL = "https://open.kakao.com/o/sDXbxqNg";

const STATS = [
  { value: "7+", label: "년 경력" },
  { value: "5", label: "개 기업" },
  { value: "15+", label: "개 프로젝트" },
];

export const About = () => {
  const handleKakaoClick = () => {
    window.open(KAKAO_OPEN_CHAT_URL, "_blank");
  };

  return (
    <MotionStack
      sx={{
        width: "100%",
        background: "#fff",
        padding: { lg: "80px 80px 48px 80px", xs: "48px 24px 24px 24px" },
        flexDirection: "column",
        alignItems: "flex-start",
        borderBottom: "1px solid #DDDDDD",
        gap: "24px",
      }}
    >
      <Title>소개</Title>

      <MotionTypography
        sx={{
          fontSize: { xs: "20px", lg: "24px" },
          fontWeight: 600,
          color: "#26262C",
          lineHeight: 1.4,
        }}
      >
        &ldquo;결과물로 신뢰를 증명합니다&rdquo;
      </MotionTypography>

      <MotionStack sx={{ gap: "16px" }}>
        <MotionTypography
          sx={{
            fontSize: "14px",
            color: "#636363",
            lineHeight: 1.8,
          }}
        >
          충북대학교 소프트웨어학과를 졸업하고, 7년간 다양한 산업 분야에서 개발
          경험을 쌓았습니다.
        </MotionTypography>

        <MotionTypography
          sx={{
            fontSize: "14px",
            color: "#636363",
            lineHeight: 1.8,
          }}
        >
          <Box component="span" sx={{ fontWeight: 600, color: "#26262C" }}>
            이마고웍스
          </Box>
          에서 AI 기반 치과 솔루션을,{" "}
          <Box component="span" sx={{ fontWeight: 600, color: "#26262C" }}>
            나라컨트롤
          </Box>
          에서 빌딩 제어 시스템을,{" "}
          <Box component="span" sx={{ fontWeight: 600, color: "#26262C" }}>
            원더피플
          </Box>
          에서 게임 UI를 개발했습니다.{" "}
          <Box component="span" sx={{ fontWeight: 600, color: "#26262C" }}>
            삼성전자 NSRM 프로젝트
          </Box>
          에도 프리랜서로 참여했습니다.
        </MotionTypography>

        <MotionTypography
          sx={{
            fontSize: "14px",
            color: "#636363",
            lineHeight: 1.8,
          }}
        >
          아이디어 단계부터 배포, 유지보수까지 전 과정을 책임지고 진행합니다.
        </MotionTypography>
      </MotionStack>

      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "16px", sm: "32px" },
          padding: "24px 32px",
          backgroundColor: "#F8F8FA",
          borderRadius: "12px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {STATS.map((stat, index) => (
          <MotionStack
            key={stat.label}
            sx={{
              alignItems: "center",
              borderRight:
                index < STATS.length - 1
                  ? { sm: "1px solid #E0E0E0", xs: "none" }
                  : "none",
              borderBottom:
                index < STATS.length - 1
                  ? { xs: "1px solid #E0E0E0", sm: "none" }
                  : "none",
              paddingRight: { sm: "32px", xs: "0" },
              paddingBottom: { xs: "16px", sm: "0" },
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#7C3AED",
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#747483",
              }}
            >
              {stat.label}
            </Typography>
          </MotionStack>
        ))}
      </Paper>

      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
          padding: "20px 24px",
          backgroundColor: "#FEF9E7",
          borderRadius: "12px",
          width: "100%",
          gap: "16px",
          border: "1px solid rgba(254, 229, 0, 0.3)",
        }}
      >
        <MotionStack sx={{ gap: "4px" }}>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#26262C",
            }}
          >
            프로젝트 상담하기
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              color: "#747483",
            }}
          >
            카카오톡 오픈채팅으로 빠른 상담
          </Typography>
        </MotionStack>
        <Button
          variant="contained"
          startIcon={<ChatIcon />}
          onClick={handleKakaoClick}
          sx={{
            backgroundColor: "#FEE500",
            color: "#000000",
            fontSize: "14px",
            fontWeight: 600,
            padding: "10px 20px",
            borderRadius: "8px",
            textTransform: "none",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "#FFD700",
            },
          }}
        >
          상담하기
        </Button>
      </Paper>

      <MotionStack
        sx={{
          flexDirection: "row",
          gap: "12px",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          sx={{
            padding: "8px",
            backgroundColor: "#F0F0F0",
            "&:hover": { backgroundColor: "#E0E0E0" },
          }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/haerim-choi-ab782b261")
          }
        >
          <LinkedInIcon fontSize="small" sx={{ color: "#0077B5" }} />
        </IconButton>
        <IconButton
          sx={{
            padding: "8px",
            backgroundColor: "#F0F0F0",
            "&:hover": { backgroundColor: "#E0E0E0" },
          }}
          onClick={() => window.open("https://github.com/chocodigo")}
        >
          <GitHubIcon fontSize="small" sx={{ color: "#333" }} />
        </IconButton>
      </MotionStack>
    </MotionStack>
  );
};
