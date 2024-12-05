// pages/api/contact.ts
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed", req });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: `All fields are required. name: ${name} email: ${email} message: ${message}`,
    });
  }

  try {
    // Nodemailer Transporter 설정
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Gmail SMTP 서버
      port: 587,
      secure: false, // TLS 사용
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // 발신 이메일
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // 발신 이메일 비밀번호 (앱 비밀번호 사용 추천)
      },
    });

    // 이메일 전송
    await transporter.sendMail({
      from: `"${name} (${email})" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`, // 발신자 이름과 이메일
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL, // 수신자 이메일
      subject: `${name} <${email}>`, // 이메일 제목
      text: `${message} from ${email}`, // 이메일 본문
    });

    res
      .status(200)
      .json({ message: `Message sent successfully from: ${name} <${email}` });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
}
