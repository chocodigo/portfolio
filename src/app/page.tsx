"use client";

import { Stack } from "@mui/material";
import { Body, Header } from "./features";
import { WorkCardPopup } from "./features/work";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { purple } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
import Zoom from "@mui/material/Zoom";
import Head from "next/head";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const transitionDuration = {
  enter: theme.transitions.duration.enteringScreen,
  exit: theme.transitions.duration.leavingScreen,
};

const queryClient = new QueryClient();

export default function Home() {
  const [isTop, setIsTop] = useState(true);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (typeof window !== "undefined" && document.body.scrollTop === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll); // 스크롤 이벤트 등록

    return () => {
      document.body.removeEventListener("scroll", handleScroll); // 이벤트 정리
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Stack ref={bodyRef}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: { lg: "112px", xs: "4em" },
            }}
          >
            <Header />
            <Body />
          </Stack>
          {!isTop && (
            <Zoom
              in={!isTop}
              timeout={transitionDuration}
              style={{
                transitionDelay: `${!isTop ? transitionDuration.exit : 0}ms`,
              }}
              unmountOnExit
            >
              <Fab
                sx={{
                  position: "fixed",
                  bottom: "8px",
                  right: "20px",
                  bgcolor: purple[400],
                  "&:hover": {
                    bgcolor: purple[100],
                  },
                  color: "#ffffff",
                }}
                onClick={() => {
                  document.body.scrollTo({
                    behavior: "smooth",
                    top: 0,
                  });
                }}
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </Zoom>
          )}
          <WorkCardPopup />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
