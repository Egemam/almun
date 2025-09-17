import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/app/ui/navbar";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
  title: "ALMUN'25",
  description: "Antalya Lisesi Model United Nations Conference 2025",
};

function Footer(){
    return(
        <footer className="w-full h-10 flex justify-center items-center">
            <Link href={"/"}>Instagram</Link>
            <Link href="https://wa.me/905414408739" className="underline"></Link>
        </footer>
    )
}

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
        <Footer/>
      </body>
    </html>
  );
}
