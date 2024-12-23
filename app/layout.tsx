import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import TableHead from "./components/TableHead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GENPOS",
  description: "Generated by create next app",
};
// const handlChange = (event:number |string) => {}

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
        <div className="flex">
        <Sidebar/>
        <div className="w-4/5 m-4">
        <Header/>
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold m-4">List of companies</h3>
          <button className="font-bold mr-4 bg-blue-500 px-4 text-white rounded-lg"> + Add new</button>
        </div>
        <SearchSection/>
        <div className="border-2 rounded-lg m-4">
          <TableHead/>
          <div>
          {children}
          </div>
        
        </div>

        
        </div>
        </div>
      </body>
    </html>
  );
}
