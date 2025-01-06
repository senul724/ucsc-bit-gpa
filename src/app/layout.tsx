import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Image from "next/image";

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

export const metadata: Metadata = {
  title: "Matrix IT",
  description: "Matrix Institute of Information technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="min-h-screen bg-white py-8 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo.png"
              alt="Matrix Institute Logo"
              width={150}
              height={75}
            />
          </div>
          {children}
          </div>
          </div>
          <Footer/>
      </body>
    </html>
  );
}
