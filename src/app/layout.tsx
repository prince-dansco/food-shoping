import type { Metadata } from "next";
import "./globals.css";
import NavbarComp from "./components/globalComp/Navbar/page";
// import Footer from "./components/footercomp/page";
import UpdatedFooter from "./components/globalComp/footercomp/updatedFooter";



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
      >
        <NavbarComp />
        {children}
        <UpdatedFooter />
      </body>
    </html>
  );
}
