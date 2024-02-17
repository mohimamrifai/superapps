import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SideNavBar from "@/components/SideNavBar";
import MainProvider from "@/components/MainProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mohammad Imam Rifai",
  description:
    "Professional Software Web Development | Freelance At Fastwork | Javascript & Typescript Programmer | Mern Stack, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainProvider>
            {children}
          </MainProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
