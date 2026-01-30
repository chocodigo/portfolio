import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.chocodigo.com";
const SITE_NAME = "최해림 | 프론트엔드 개발자";
const SITE_DESCRIPTION =
  "7년차 풀스택 개발자 최해림입니다. React, TypeScript, Next.js 기반 웹/앱 개발 외주를 진행합니다. AI 솔루션, 빌딩 제어 시스템, 게임 UI 등 다양한 프로젝트 경험을 보유하고 있습니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "프론트엔드 개발자",
    "풀스택 개발자",
    "React 개발자",
    "TypeScript 개발자",
    "Next.js 개발자",
    "프리랜서 개발자",
    "웹 개발 외주",
    "앱 개발 외주",
    "프론트엔드 외주",
    "React 프로젝트 외주",
    "홈페이지 제작",
    "반응형 웹 개발",
    "하이브리드 앱 개발",
    "AI 솔루션 개발",
    "웹 애플리케이션 개발",
    "최해림",
    "chocodigo",
  ],
  authors: [{ name: "최해림", url: SITE_URL }],
  creator: "최해림",
  publisher: "최해림",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "최해림 | 7년차 풀스택 개발자 포트폴리오",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "최해림 - 프론트엔드 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "최해림 | 7년차 풀스택 개발자 포트폴리오",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Google Search Console 인증 코드 추가 시
    other: {
      "naver-site-verification": "44fc0decccc432a361ead77cfac59dd0be22486e",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
