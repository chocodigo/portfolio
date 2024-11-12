"use client";

import { Stack } from "@mui/material";
import { Body, Header } from "./features";
import { AnimatePresence, motion } from "framer-motion";
import MotionStack from "./shared/components/MotionStack";
import { useSelectedPoupIdStates } from "./shared/states/PopupId";
import { WorkCardPopup } from "./features/work";

export default function Home() {
  return (
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
  );
}
