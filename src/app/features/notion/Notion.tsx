import { NotionRenderer } from "react-notion-x";
import { Stack } from "@mui/material";
import { useNotionResponse } from "./api/useNotionResponse";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

interface NotionProps {
  id: string | "";
}

export const Notion = ({ id }: NotionProps) => {
  const { data } = useNotionResponse(id);

  return (
    <Stack sx={{ padding: "16px" }}>
      {data ? <NotionRenderer recordMap={data.data} fullPage={true} /> : <></>}
    </Stack>
  );
};
