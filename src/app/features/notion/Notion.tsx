import { NotionRenderer } from "react-notion-x";
import { Stack } from "@mui/material";
import { useNotionResponse } from "./api/useNotionResponse";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { GradientCircularProgress } from "@/app/shared/components/Loading";

interface NotionProps {
  id: string | "";
}

export const Notion = ({ id }: NotionProps) => {
  const { data, isLoading } = useNotionResponse(id);

  return (
    <Stack
      sx={{
        padding: "16px",
      }}
    >
      {isLoading && <GradientCircularProgress />}
      {data?.data && (
        <NotionRenderer
          recordMap={data.data}
          fullPage={true}
          rootPageId={id}
          isImageZoomable={false}
        />
      )}
    </Stack>
  );
};
