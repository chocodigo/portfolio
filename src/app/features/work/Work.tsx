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
        padding: "80px 80px 48px 80px",
        gap: "30px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
    >
      <Title>Work</Title>
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
