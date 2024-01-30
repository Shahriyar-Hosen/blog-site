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
          <div className="wrapper">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
