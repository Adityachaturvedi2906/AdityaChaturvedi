import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import TopBottom from "@/components/topBottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Chaturvedi · Fintech Product & Operations",
  description:
    "Fintech professional working across payments, merchant experience, product problem-solving, and technical operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative bg-[#fbfbfd] pt-20 text-[#101426] antialiased dark:bg-[#090a0f] dark:text-white`}>
        <div className="pointer-events-none absolute left-[-12rem] top-[-10rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#ddd8ff] blur-[9rem] opacity-70 dark:bg-[#4d447c] dark:opacity-20" />
        <div className="pointer-events-none absolute right-[-12rem] top-[-4rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-[#ffe3d8] blur-[9rem] opacity-70 dark:bg-[#6c3f34] dark:opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-[30rem] -z-10 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#e7edff] blur-[10rem] opacity-60 dark:bg-[#27355d] dark:opacity-20" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
            <TopBottom />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
