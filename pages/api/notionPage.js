import { NotionAPI } from "notion-client";

export default async function handler(req, res) {
  const { pageId } = req.query;
  const notion = new NotionAPI();

  try {
    const response = await notion.getPage(pageId);

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
