import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "MaxCodeCraft - Web.Dev",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
