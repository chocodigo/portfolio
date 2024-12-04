"use client";

import { Stack } from "@mui/material";
import { Body, Header } from "./features";
import { WorkCardPopup } from "./features/work";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

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

const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Stack>
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
          <WorkCardPopup />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
