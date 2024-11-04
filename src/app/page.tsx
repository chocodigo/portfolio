"use client";

import { Stack } from "@mui/material";
import { Body, Header } from "./features";

export default function Home() {
  return (
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
  );
}
