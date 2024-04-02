import { Outfit, Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";

const vcNudge = localFont({
  src: "../../public/fonts/VCNudgeNormalExtraBoldTrial.otf",
  weight: "700",
  style: "normal",
  variable: "--font-vcNudge",
});

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "200",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Enigma",
  description:
    "Enigma is a Startup Extchange hosted in NIT by NCS & Marconics Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Enigma</title>
      </head>
      <body
        className={`${outfit.variable} ${vcNudge.variable} ${poppins.variable} ${inter.variable} font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
