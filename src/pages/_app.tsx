import { type AppType } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
