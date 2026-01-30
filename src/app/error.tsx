"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Stack
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Typography variant="h5" sx={{ color: "#FDF4FF" }}>
        문제가 발생했습니다
      </Typography>
      <Button
        variant="contained"
        onClick={reset}
        sx={{
          backgroundColor: "#7C3AED",
          "&:hover": { backgroundColor: "#6D28D9" },
        }}
      >
        다시 시도
      </Button>
    </Stack>
  );
}
