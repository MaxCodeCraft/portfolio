import { Offside } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const offside = Offside({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "MaxCodeCraft | Maxime Bocquet",
  description:
    "Développeur full stack spécialisé dans la méthode MERN (MongoDB, Express.js, React, Node.js) basé à Nice, France. Expertise en développement web, applications web modernes et solutions logicielles. Disponible pour des projets freelance et collaborations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={offside.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
