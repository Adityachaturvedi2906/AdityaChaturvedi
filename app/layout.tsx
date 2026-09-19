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
  description: "Fintech professional working across payments, merchant experience, product problem-solving, and technical operations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className + " min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--page-text)] relative pt-20 sm:pt-28"}>
        <div className="pointer-events-none absolute right-[-10rem] top-[-8rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#f0d8dd] blur-[9rem] dark:bg-[#33243a] sm:right-[-6rem] sm:h-[40rem] sm:w-[40rem]" />
        <div className="pointer-events-none absolute left-[-12rem] top-[5rem] -z-10 h-[25rem] w-[25rem] rounded-full bg-[#ddd9fb] blur-[9rem] dark:bg-[#252442] sm:left-[-8rem] sm:h-[35rem] sm:w-[35rem]" />
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