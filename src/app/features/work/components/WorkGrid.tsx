"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { JobGridType } from "../types/dataType";
import MotionTypography from "@/app/shared/components/MotionTypography";
import { useSelectedPoupIdStates } from "@/app/shared/states/PopupId";

export const WorkGrid = ({ dataList, duration, jobName }: JobGridType) => {
  const { updateSelectedPopupId, updateNotionId } = useSelectedPoupIdStates();

  return (
    <MotionStack sx={{ gap: "8px" }}>
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
          <Grid2 size={4} key={`${jobName}_${item.title}_${index}`}>
            <MotionStack
              layoutId={item.title}
              onClick={async () => {
                updateNotionId(item.notionId);
                updateSelectedPopupId(item.title);
              }}
            >
              <Card>
                <CardMedia component={"img"} height="140" image={item.image} />
                <CardContent>
                  <Typography sx={{ fontSize: "14px" }}>
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </MotionStack>
          </Grid2>
        ))}
      </Grid2>
    </MotionStack>
  );
};
