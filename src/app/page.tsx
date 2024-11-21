"use client";

import { Stack } from "@mui/material";
import { Body, Header } from "./features";
import { WorkCardPopup } from "./features/work";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "112px",
          }}
        >
          <Header />
          <Body />
        </Stack>
        <WorkCardPopup />
      </Stack>
    </QueryClientProvider>
  );
}
