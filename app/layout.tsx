import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klientská zóna | B2B Portal",
  description: "Moderní B2B klientská zóna pro správu zakázek a faktur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
