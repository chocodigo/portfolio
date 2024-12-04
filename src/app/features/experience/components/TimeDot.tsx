"use client";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Icon } from "@mui/material";
import MotionTypography from "@/app/shared/components/MotionTypography";
import MotionStack from "@/app/shared/components/MotionStack";

interface IProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  duration: string;
  isFirst?: boolean;
}

export const TimeDot = ({
  icon,
  title,
  subtitle,
  duration,
  isFirst,
}: IProps) => {
  return (
    <TimelineItem>
      <TimelineSeparator sx={{ marginTop: isFirst ? "32px" : 0 }}>
        {!isFirst && (
          <TimelineConnector
            sx={{
              backgroundColor: "transparent",

              border: "1.5px dashed #F1ACFb",
            }}
          />
        )}
        <TimelineDot sx={{ backgroundColor: "#F1ACFB", margin: 0 }} />

        <TimelineConnector
          sx={{
            backgroundColor: "transparent",

            border: "1.5px dashed #F1ACFb",
          }}
        />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          padding: "16px",
          marginLeft: "24px",
          display: "flex",
          gap: " 17px",
        }}
      >
        <Icon
          sx={{
            backgroundColor: "#D9D9DE",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Icon>

        <MotionStack sx={{ gap: "8px", width: "100%" }}>
          <MotionStack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <MotionTypography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                color: "#26262C",
              }}
            >
              {title}
            </MotionTypography>
            <MotionTypography
              sx={{
                fontSize: "12px",
                fontWeight: "normal",
                lineHeight: "16px",
                color: "#747483",
              }}
            >
              {duration}
            </MotionTypography>
          </MotionStack>
          <MotionTypography
            sx={{
              fontSize: "12px",
              fontWeight: "normal",
              lineHeight: "16px",
              color: "#747483",
            }}
          >
            {subtitle}
          </MotionTypography>
        </MotionStack>
      </TimelineContent>
    </TimelineItem>
  );
};
