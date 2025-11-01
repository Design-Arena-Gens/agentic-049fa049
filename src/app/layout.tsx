import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sofa Session | Hyper-Real Instagram Growth System",
  description:
    "Experience a hyper-real influencer breakdown of a high-converting Instagram growth system—crafted for cinematic intimacy and measurable impact.",
  metadataBase: new URL("https://agentic-049fa049.vercel.app"),
  openGraph: {
    title: "Hyper-Real Instagram Growth System Session",
    description:
      "Step into the sofa session where cinematic storytelling meets data-backed Instagram growth strategy.",
    url: "https://agentic-049fa049.vercel.app",
    siteName: "Sofa Session",
    images: [
      {
        url: "/fallback-poster.jpg",
        width: 1600,
        height: 1067,
        alt: "Influencer sitting on a sofa recording a growth strategy session",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyper-Real Instagram Growth System Session",
    description:
      "Inside the cinematic influencer session that turns Instagram growth strategy into an immersive experience.",
    images: ["/fallback-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
