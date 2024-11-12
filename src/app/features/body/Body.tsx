"use client";
import { Stack } from "@mui/material";
import { Navigation } from "../navigation";
import { About } from "../about";
import { Skill } from "../skill";
import { Experience } from "../experience";
import { Work } from "../work";

export const Body = () => {
  return (
    <Stack
      sx={{
        marginTop: "64px",
        borderRadius: "4px",
        width: "864px",
      }}
    >
      <Navigation />
      <About />
      <Skill />
      <Experience />
      <Work />
    </Stack>
  );
};
