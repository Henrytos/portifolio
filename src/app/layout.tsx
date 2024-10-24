import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/_lib/utils";
import { ThemeProvider } from "@/_contexts/theme/theme-provider";
import { NavBar } from "@/_components/navigation/nav-bar/nav-bar";
import { SideBar } from "@/_components/navigation/side-bar/side-bar";
import { Metadata } from "next";

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
    <html lang="pt-br" suppressHydrationWarning={true}>
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
          <span className=" w-full max-w-72 lg:block hidden" />
          <NavBar />
          <div className="flex-1 lg:overflow-auto ">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
