import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/app/ui/navbar";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
  title: "ALMUN'25",
  description: "Antalya Lisesi Model United Nations Conference 2025",
};

// #58120f r
// #09090b b
// #fefdff w

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
