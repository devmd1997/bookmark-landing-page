import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import MenuBarProvider from "./providers/MenuProvider";
import MenuBar from "./components/navBar/menuBar";

export const metadata: Metadata = {
  title: "Bookmark Landing Page",
  description: "Bookmark Landing Page with Next.js",
};

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body>
        <MenuBarProvider>
          <MenuBar />
          {children}
        </MenuBarProvider>
      </body>
    </html>
  );
}
