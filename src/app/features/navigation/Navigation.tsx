"use client";

import { NavItem } from "./NavItem";
import React, { useEffect, useRef, useState } from "react";

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
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
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
        <NavItem onClick={() => scrollToSection(sectionName.ABOUT)}>
          <MotionTypography
            sx={{ fontSize: "14px" }}
            animate={{
              fontSize: isSticky ? "12px" : "14px",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            variant="subtitle1"
          >
            소개
          </MotionTypography>
        </NavItem>
        <NavItem onClick={() => scrollToSection(sectionName.SKILL)}>
          <MotionTypography
            sx={{ fontSize: "14px" }}
            animate={{
              fontSize: isSticky ? "12px" : "14px",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            variant="subtitle1"
          >
            기술 스택
          </MotionTypography>
        </NavItem>
        <NavItem onClick={() => scrollToSection(sectionName.EXPERIENCE)}>
          <MotionTypography
            sx={{ fontSize: "14px" }}
            animate={{
              fontSize: isSticky ? "12px" : "14px",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            variant="subtitle1"
          >
            경력
          </MotionTypography>
        </NavItem>
        <NavItem onClick={() => scrollToSection(sectionName.WORK)}>
          <MotionTypography
            sx={{ fontSize: "14px" }}
            animate={{
              fontSize: isSticky ? "12px" : "14px",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            variant="subtitle1"
          >
            작업물
          </MotionTypography>
        </NavItem>
        {/** 이메일(연락하기) 탭 주석 처리 **/}
        {/**
        <NavItem onClick={() => scrollToSection(sectionName.CONTACT)}>
          <MotionTypography
            sx={{ fontSize: "14px" }}
            animate={{
              fontSize: isSticky ? "12px" : "14px",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            variant="subtitle1"
          >
            연락하기
          </MotionTypography>
        </NavItem>
        **/}
      </MotionStack>
    </>
  );
};
