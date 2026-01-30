"use client";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Chip, Icon } from "@mui/material";
import MotionTypography from "@/app/shared/components/MotionTypography";
import MotionStack from "@/app/shared/components/MotionStack";

interface IProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  duration: string;
  isFirst?: boolean;
  isCurrent?: boolean;
  isEnterprise?: boolean;
  highlight?: string;
}

export const TimeDot = ({
  icon,
  title,
  subtitle,
  duration,
  isFirst,
  isCurrent,
  isEnterprise,
  highlight,
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
        <TimelineDot
          sx={{
            backgroundColor: isCurrent ? "#22C55E" : "#F1ACFB",
            margin: 0,
            boxShadow: isCurrent ? "0 0 8px rgba(34, 197, 94, 0.4)" : "none",
          }}
        />

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
            backgroundColor: isEnterprise ? "#1428A0" : "#D9D9DE",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </Icon>

        <MotionStack sx={{ gap: "8px", width: "100%" }}>
          <MotionStack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              width: "100%",
              gap: { xs: "4px", sm: "8px" },
            }}
          >
            <MotionStack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
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
              {isCurrent && (
                <Chip
                  label="현재"
                  size="small"
                  sx={{
                    backgroundColor: "#22C55E",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 600,
                    height: "20px",
                  }}
                />
              )}
              {isEnterprise && (
                <Chip
                  label="대기업"
                  size="small"
                  sx={{
                    backgroundColor: "#1428A0",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 600,
                    height: "20px",
                  }}
                />
              )}
            </MotionStack>
            <MotionTypography
              sx={{
                fontSize: "12px",
                fontWeight: "normal",
                lineHeight: "16px",
                color: "#747483",
                whiteSpace: "nowrap",
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
          {highlight && (
            <Chip
              label={highlight}
              size="small"
              variant="outlined"
              sx={{
                alignSelf: "flex-start",
                fontSize: "11px",
                height: "24px",
                borderColor: "#7C3AED",
                color: "#7C3AED",
                backgroundColor: "rgba(124, 58, 237, 0.05)",
              }}
            />
          )}
        </MotionStack>
      </TimelineContent>
    </TimelineItem>
  );
};
