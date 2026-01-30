"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { JobGridType } from "../types/dataType";
import MotionTypography from "@/app/shared/components/MotionTypography";
import { useSelectedPoupIdStates } from "@/app/shared/states/PopupId";

export const WorkGrid = ({
  dataList,
  duration,
  jobName,
}: Omit<JobGridType, "date">) => {
  const { updateSelectedPopupId, updateNotionId } = useSelectedPoupIdStates();

  return (
    <MotionStack sx={{ gap: "8px" }}>
      <MotionStack
        sx={{
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <MotionTypography
          sx={{
            fontSize: "16px",
            lineHeight: "20px",
            color: "#26262C",
          }}
        >
          {jobName}
        </MotionTypography>
        <MotionTypography
          sx={{
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "16px",
            color: "#747483",
          }}
        >
          {duration}
        </MotionTypography>
      </MotionStack>

      <Grid2 container spacing={1}>
        {dataList.map((item, index) => (
          <Grid2
            size={{ lg: 4, xs: 12 }}
            key={`${jobName}_${item.title}_${index}`}
          >
            <MotionStack
              layoutId={item.title}
              onClick={async () => {
                updateNotionId(item.notionId);
                updateSelectedPopupId(item.title);
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia component={"img"} image={item.image} />
                <CardContent>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end", padding: "8px 16px 12px" }}>
                  <MotionStack
                    sx={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "4px",
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#7C3AED",
                        fontWeight: 500,
                      }}
                    >
                      자세히 보기
                    </Typography>
                    <ArrowForwardIcon
                      sx={{ fontSize: "14px", color: "#7C3AED" }}
                    />
                  </MotionStack>
                </CardActions>
              </Card>
            </MotionStack>
          </Grid2>
        ))}
      </Grid2>
    </MotionStack>
  );
};
