import { NotionAPI } from "notion-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const { pageId } = req.query;

  // 타입 단언: pageId는 string이어야 함
  if (typeof pageId !== "string") {
    res.status(400).json({ error: "Invalid pageId" });
    return;
  }

  const notion = new NotionAPI();

  try {
    const response = await notion.getPage(pageId);
    res.status(200).json(response);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
}
