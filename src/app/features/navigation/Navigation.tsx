"use client";

import { Stack, StackProps, Typography } from "@mui/material";
import { NavItem } from "./NavItem";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StackWrapper = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  return <Stack ref={ref} {...props} />;
});
export const Navigation = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const MotionStack = motion(StackWrapper);

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
      transition={{ duration: 0.5, ease: "linear" }}
      sx={{
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
        <Typography variant="subtitle1">About</Typography>
      </NavItem>
      <NavItem>
        <Typography variant="subtitle1">Skill</Typography>
      </NavItem>
      <NavItem>
        <Typography variant="subtitle1">Experience</Typography>
      </NavItem>
      <NavItem>
        <Typography variant="subtitle1">Work</Typography>
      </NavItem>
      <NavItem>
        <Typography variant="subtitle1">Contact</Typography>
      </NavItem>
    </MotionStack>
  );
};
