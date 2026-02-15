import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark - Content Idea Generator for Creators",
  description: "Generate personalized, trending content ideas for YouTube, TikTok, Instagram, and Twitch. Built for creators who want to stay ahead of the curve.",
  keywords: ["content creation", "content ideas", "youtube", "tiktok", "instagram", "twitch", "streaming", "creator tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
