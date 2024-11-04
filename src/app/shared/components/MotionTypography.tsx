"use client";

import { Typography, TypographyProps } from "@mui/material";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const TypographyWrapper = forwardRef<HTMLDivElement, TypographyProps>(
  (props, ref) => {
    return <Typography ref={ref} {...props} />;
  }
);

const MotionTypography = motion(TypographyWrapper);

export default MotionTypography;
