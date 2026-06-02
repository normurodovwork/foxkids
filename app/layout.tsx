import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoxKids — Animal World for Kids",
  description:
    "A fun kids' education platform to discover amazing animals through facts, videos and quizzes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
