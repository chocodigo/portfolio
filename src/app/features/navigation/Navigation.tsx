"use client";

import { NavItem } from "./NavItem";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import MotionStack from "@/app/shared/components/MotionStack";
import MotionTypography from "@/app/shared/components/MotionTypography";
import { sectionName, SectionRefs } from "./navType";

interface IProps {
  scrollToSection: (section: SectionRefs) => void;
}

export const Navigation = ({ scrollToSection }: IProps) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // placeholderRef가 뷰포트와 교차하지 않을 때 (즉, 상단에 고정되었을 때)
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null, // 뷰포트를 기준으로
        threshold: 0, // 요소가 살짝이라도 보이면 isIntersecting = true
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      if (placeholderRef.current) {
        observer.unobserve(placeholderRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={placeholderRef} style={{ height: "1px" }}></div>
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
          zIndex: 100,
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
            onClick={() => scrollToSection(sectionName.ABOUT)}
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
            onClick={() => scrollToSection(sectionName.SKILL)}
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
            onClick={() => scrollToSection(sectionName.EXPERIENCE)}
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
            onClick={() => scrollToSection(sectionName.WORK)}
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
            onClick={() => scrollToSection(sectionName.CONTACT)}
          >
            Contact
          </MotionTypography>
        </NavItem>
      </MotionStack>
    </>
  );
};
