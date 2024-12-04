"use client";

import { Stack } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const NavItem = ({ children, onClick }: IProps) => {
  return (
    <Stack
      onClick={onClick}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: { lg: "0 20px", xs: "0 12px" },
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
