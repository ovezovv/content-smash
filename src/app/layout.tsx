import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Smash",
  description: "developed by Ovezovv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-row justify-between p-4 no-grow bg-dark">
          <SideMenu />
          <div className="grow">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
