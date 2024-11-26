"use client";

import { Card, CardProps } from "@mui/material";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const CardWrapper = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return <Card ref={ref} {...props} />;
});

const MotionCard = motion.create(CardWrapper);

export default MotionCard;
