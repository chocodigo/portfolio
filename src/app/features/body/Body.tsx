"use client";
import { Stack } from "@mui/material";
import { Navigation } from "../navigation";
import { About } from "../about";
import { Skill } from "../skill";
import { Experience } from "../experience";
import { Work } from "../work";
import { Footer } from "../footer";
import { useRef } from "react";
import { sectionName, SectionRefs } from "../navigation/navType";

export const Body = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: SectionRefs) => {
    switch (section) {
      case sectionName.ABOUT:
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case sectionName.SKILL:
        if (skillRef.current) {
          skillRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case sectionName.EXPERIENCE:
        if (experienceRef.current) {
          experienceRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case sectionName.WORK:
        if (workRef.current) {
          workRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
    }
  };

  return (
    <Stack
      sx={{
        marginTop: "64px",
        borderRadius: "4px",
        width: { xs: "380px", lg: "864px" },
        marginBottom: "64px",
      }}
    >
      <Navigation scrollToSection={scrollToSection} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={workRef}>
        <Work />
      </div>
      <Footer />
    </Stack>
  );
};
