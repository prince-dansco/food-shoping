import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComp from "./components/Navbar/page";
import Footer from "./components/footercomp/page";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Food  shopping",
  description: "for booking a table food  shopping the best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` `}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
