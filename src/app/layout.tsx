import type { Metadata } from "next";
import { Arsenal, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Ubuntu supports 300 to 700
  style: ["normal", "italic"],
});

const arsenal = Arsenal({
  variable: "--font-arsenal",
  subsets: ["latin"],
  weight: ["400", "700"], // Arsenal only supports 400 and 700
  style: ["normal", "italic"], // Arsenal supports normal and italic
});

export const metadata: Metadata = {
  title: "BGT VENTURES GENERAL TRADING LLC",
  description: "BGT VENTURES GENERAL TRADING LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arsenal.variable} ${ubuntu.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
