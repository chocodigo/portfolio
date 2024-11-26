"use client";

import { Stack, StackProps } from "@mui/material";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const StackWrapper = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  return <Stack ref={ref} {...props} />;
});

const MotionStack = motion.create(StackWrapper);

export default MotionStack;
