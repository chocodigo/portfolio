"use client";

import { Stack, StackProps, Typography, TypographyProps } from "@mui/material";
import { NavItem } from "./NavItem";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StackWrapper = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  return <Stack ref={ref} {...props} />;
});

const TypographyWrapper = forwardRef<HTMLDivElement, TypographyProps>(
  (props, ref) => {
    return <Typography ref={ref} {...props} />;
  }
);

export const Navigation = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const MotionStack = motion(StackWrapper);
  const MotionTypography = motion(TypographyWrapper);

  const handleScroll = () => {
    const stickyTrigger = navRef.current?.offsetTop ?? 0;
    if (document.body.scrollTop >= stickyTrigger) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MotionStack
      ref={navRef}
      animate={{
        height: isSticky ? "48px" : "56px",
        borderTopLeftRadius: isSticky ? 0 : "4px",
        borderTopRightRadius: isSticky ? 0 : "4px",
        fontSize: isSticky ? "12px !important" : "14px !important",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      sx={{
        height: "56px",
        background: "#F7F7F7",
        padding: "16px",
        flexDirection: "row",
        justifyContent: "center",
        position: "sticky",
        overflow: "auto",
        top: 0,
      }}
    >
      <NavItem>
        <MotionTypography
          sx={{ fontSize: "14px" }}
          animate={{
            fontSize: isSticky ? "12px" : "14px",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variant="subtitle1"
        >
          About
        </MotionTypography>
      </NavItem>
      <NavItem>
        <MotionTypography
          sx={{ fontSize: "14px" }}
          animate={{
            fontSize: isSticky ? "12px" : "14px",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variant="subtitle1"
        >
          Skill
        </MotionTypography>
      </NavItem>
      <NavItem>
        <MotionTypography
          sx={{ fontSize: "14px" }}
          animate={{
            fontSize: isSticky ? "12px" : "14px",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variant="subtitle1"
        >
          Experience
        </MotionTypography>
      </NavItem>
      <NavItem>
        <MotionTypography
          sx={{ fontSize: "14px" }}
          animate={{
            fontSize: isSticky ? "12px" : "14px",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variant="subtitle1"
        >
          Work
        </MotionTypography>
      </NavItem>
      <NavItem>
        <MotionTypography
          sx={{ fontSize: "14px" }}
          animate={{
            fontSize: isSticky ? "12px" : "14px",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variant="subtitle1"
        >
          Contact
        </MotionTypography>
      </NavItem>
    </MotionStack>
  );
};
