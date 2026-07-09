import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark — Content Ideas for Creators",
  description:
    "Generate personalized, trending content ideas for YouTube, TikTok, Instagram & Twitch. Stop guessing. Start creating.",
  keywords: [
    "content creation",
    "content ideas",
    "youtube ideas",
    "tiktok ideas",
    "instagram ideas",
    "creator tools",
    "content strategy",
  ],
  openGraph: {
    title: "Spark — Content Ideas for Creators",
    description: "Never run out of content ideas again.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
