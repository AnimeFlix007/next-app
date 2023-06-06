import { ReactNode } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/auth/RegisterModal";
import ToasterProvider from "./provider/ToasterProvider";

const poppin = Poppins({
  subsets: ["latin"],
  weight: "200",
});

type Props = { children: ReactNode };

export const metadata = {
  title: "Crowm Town",
  description: "Best Booking app that you can find over Internet",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <ClientOnly>
          <RegisterModal />
          <ToasterProvider />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
