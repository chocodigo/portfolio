"use client";
import { Stack } from "@mui/material";
import { Navigation } from "../navigation";
import { About } from "../about";
import { Skill } from "../skill";
import { Experience } from "../experience";
import { Work } from "../work";
import { AnimatePresence, motion } from "framer-motion";
import MotionStack from "@/app/shared/components/MotionStack";
import { useSelectedPoupIdStates } from "@/app/shared/states/PopupId";

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
