import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pitchhub",
  description: "SaaS for Pitching Competitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-full min-h-[100vh] bg-white text-black overflow-y-scroll overflow-x-hidden">
          <ToastContainer/>
            {children}
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}
