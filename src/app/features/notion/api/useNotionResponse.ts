import { useQuery } from "@tanstack/react-query";
import { getNotionResponse } from "./getNotionResponse";

export const useNotionResponse = (id: string) => {
  const result = useQuery({
    queryKey: ["notion_api", id],
    queryFn: () => getNotionResponse(id),
  });

  return result;
};
