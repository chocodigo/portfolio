"use client";

import { Dialog, DialogProps } from "@mui/material";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const DialogWrapper = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  return <Dialog ref={ref} {...props} />;
});

const MotionDialog = motion(DialogWrapper);

export default MotionDialog;
