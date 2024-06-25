import { Open_Sans } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "MaxCodeCraft - Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
