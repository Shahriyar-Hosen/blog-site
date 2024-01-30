import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "The best app",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
