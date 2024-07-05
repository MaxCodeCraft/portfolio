import { Offside } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const offside = Offside({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "MaxCodeCraft | Maxime Bocquet",
  description:
    "Je suis un développeur web full stack passionné avec une expérience unique dans la vente. J'utilise la stack MERN et j'apprécie les bibliothèques React telles que Tailwind CSS et Framer Motion. Grâce à un bootcamp intensif, j'ai maîtrisé les frameworks nécessaires pour donner vie à vos projets !",
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
