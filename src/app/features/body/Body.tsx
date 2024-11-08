"use client";
import { Stack } from "@mui/material";
import { Navigation } from "../navigation";
import { About } from "../about";
import { Skill } from "../skill";
import { Experience } from "../experience";

export const Body = () => {
  return (
    <Stack
      sx={{
        marginTop: "64px",
        borderRadius: "4px",
        width: "864px",
        height: "3448px",
      }}
    >
      <Navigation />
      <About />
      <Skill />
      <Experience />
    </Stack>
  );
};
