import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/contexts/theme/theme-provider";
import { NavBar } from "@/components/navigation/nav-bar/nav-bar";
import { SideBar } from "@/components/navigation/side-bar/side-bar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Henry Franz Desenvolvedor Front-End",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "text-foreground flex  flex-col lg:flex-row font-sans antialiased  bg-background relative",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SideBar />
          <NavBar />
          <div className="flex-1 lg:overflow-auto">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
