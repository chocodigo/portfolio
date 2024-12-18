import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "웹 개발 외주 | 프론트엔드 프로젝트",
  description:
    "React, TypeScript, Next.js를 활용한 최적화된 웹 개발 외주 서비스를 제공합니다. 프로젝트 사례와 강력한 기술력을 포트폴리오에서 확인하세요.",
  keywords: [
    "프론트엔드 개발자",
    "React 개발자",
    "TypeScript 개발자",
    "프리랜서 개발자",
    "프론트엔드 외주 개발",
    "React 프로젝트 외주",
    "TypeScript 프로젝트 외주",
    "Next.js 프로젝트 외주",
    "JavaScript 웹 개발",
    "모바일 친화적 웹 개발",
    "반응형 웹",
    "클라우드 기반 웹 개발",
    "하이브리드 앱 개발",
    "웹 개발 외주",
    "프로젝트 단기 외주 개발",
    "홈페이지 제작",
    "앱 제작",
    "반응형 홈페이지 제작",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
