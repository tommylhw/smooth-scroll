import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playwrite_US_Modern } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

// providers
import ScrollProvider from "@/providers/ScrollProvider";
import MouseProvider from "@/providers/MouseProvider";
import Cursor from "@/components/Cursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const playwriteUS = Playwrite_US_Modern({
  variable: "--font-playwrite-us",
  weight: "400",
});
const universoBlack = localFont({
  src: "./fonts/Fontspring-DEMO-universo-black.otf",
  variable: "--font-universo-black",
});

export const metadata: Metadata = {
  title: "Smooth Scroll",
  description: "Smooth Scrolling Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwriteUS.variable} ${universoBlack.variable} antialiased`}
      >
        <ScrollProvider>
          <MouseProvider>
            {children}
          </MouseProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}
