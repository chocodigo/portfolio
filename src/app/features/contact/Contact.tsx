"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import { Title } from "@/app/shared/components/Title";
import { ContactForm } from "./components";

export const Contact = () => {
  return (
    <MotionStack
      sx={{
        background: "#ffffff",
        width: "100%",
        padding: { lg: "80px 80px 48px 80px", xs: "48px 24px 16px 24px" },
        gap: "30px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
    >
      <Title>연락하기</Title>
      <ContactForm />
    </MotionStack>
  );
};
