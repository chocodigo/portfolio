import axios from "axios";

export const getNotionResponse = async (id: string) => {
  return await axios.get(`/api/notionPage?pageId=${id}`);
};
