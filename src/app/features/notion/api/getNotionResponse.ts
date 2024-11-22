import axios from "axios";

export const getNotionResponse = async (id: string) => {
  // return await axios.get(`/api/notionPage?pageId=${id}`, {
  //   headers: { "Cache-Control": "no-cache" },
  //   params: { includeSignedUrls: true },
  // });

  return await axios.get(`https://notion-api.splitbee.io/v1/page/${id}`);
};
