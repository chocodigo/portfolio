import axios from "axios";

export const getNotionResponse = async (id: string) => {
  return await axios.get(
    `https://portfolio-qsfskuoi1-haerim-chois-projects.vercel.app/api/notionPage?pageId=${id}`,
    {
      params: { includeSignedUrls: true },
    }
  );
};
