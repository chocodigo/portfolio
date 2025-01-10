"use client";

import MotionStack from "@/app/shared/components/MotionStack";
import { Title } from "@/app/shared/components/Title";
import { WorkGrid } from "./components/WorkGrid";
import { dataList } from "./constants/dataList";

export const Work = () => {
  return (
    <MotionStack
      sx={{
        background: "#ffffff",
        width: "100%",
        padding: { lg: "80px 80px 48px 80px", xs: "48px 24px 16px 24px" },
        gap: "30px",
        borderBottom: "1px solid #DDDDDD",
      }}
    >
      <Title>작업물</Title>
      {dataList.map((item, index) => (
        <WorkGrid
          key={`WorkGrid_${index}`}
          dataList={item.dataList}
          duration={item.duration}
          jobName={item.jobName}
        />
      ))}
    </MotionStack>
  );
};
