"use client";

import { Button, ButtonProps } from "@mui/material";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const ButtonWrapper = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <Button ref={ref} {...props} />;
  }
);

const MotionButton = motion.create(ButtonWrapper);

export default MotionButton;
