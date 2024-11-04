"use client";

import { Stack } from "@mui/material";

export const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        color: "#636363",
        borderRadius: "8px",
        cursor: "pointer",

        ":hover": {
          background: "rgba(222, 222, 222, 0.25)",
        },
        ":active": {
          background: "white",
        },
      }}
    >
      {children}
    </Stack>
  );
};
