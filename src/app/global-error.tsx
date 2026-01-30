"use client";

import { Button } from "@mui/material";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            background: "linear-gradient(160deg, rgba(30, 27, 75, 0.95) 0%, rgba(76, 29, 149, 0.85) 50%, rgba(107, 33, 168, 0.75) 100%)",
          }}
        >
          <h2 style={{ color: "#FDF4FF" }}>문제가 발생했습니다</h2>
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
        </div>
      </body>
    </html>
  );
}
