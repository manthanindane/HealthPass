import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {Manrope} from "next/font/google"


// const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthPass Inc",
  description: "An all in one medical solution",
  
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        
      <head>
            <link rel="icon" href="favicon.ico" /> 
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
 
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )

}
