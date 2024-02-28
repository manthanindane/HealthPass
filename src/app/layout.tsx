import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

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
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
 
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
