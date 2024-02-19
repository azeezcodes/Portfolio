import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import back from "@/public/back.svg";


const bebas = Bebas_Neue({ subsets: ["latin"], weight: ['400'], variable:'--font-bebas' });

export const metadata = {
  title: "Azeezcodes",
  description: "Get to meet with a unique and creative problem solver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} bg-[#EFEFEF]`} style={{
        backgroundImage: `url(${back.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} >
        <main>

          <div> <Navbar /></div>
          <div >{children}</div>

        </main>

      </body>
    </html>
  );
}
