import MotionStack from "./MotionStack";
import MotionTypography from "./MotionTypography";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionStack sx={{ gap: 0 }}>
      <MotionTypography
        sx={{ fontSize: "24px", color: "#636363", fontWeight: "300" }}
      >
        {children}
      </MotionTypography>
      <MotionStack
        sx={{
          width: "52px",
          height: "29.2px",
          padding: " 11.2px 0px 16px 0px",
        }}
      >
        <MotionStack
          sx={{
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(270deg, #8CC9F0 0%, #A89CC8 49%, #EFA8B0 99%)",
          }}
        />
      </MotionStack>
    </MotionStack>
  );
};
