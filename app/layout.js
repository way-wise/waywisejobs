import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Rajdhani, Rubik } from "next/font/google";

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

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Way-Wise Jobs",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rajdhani.className} ${rubik.className}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-rajdhani`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
