import { NotionAPI } from "notion-client";

export default async function handler(req, res) {
  const { pageId } = req.query; // 요청에서 페이지 ID 추출
  const notion = new NotionAPI();

  try {
    const response = await notion.getPage(pageId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
