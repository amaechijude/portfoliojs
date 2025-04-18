import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amaechi's Portfolio Website",
  description: "Full stack developers portfolio website",
  keywords: [
    "Amaechi",
    "Portfolio",
    "Full Stack Developer",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Django",
    "Flask",
    "DjangoRestFramework",
    ".NET",
    "Dotnet",
    "C#",
    "AspNetCore",
    "Database",
    "PostgreSQL",
  ],
  creator: "Amaechi Ugwu",
  authors: {
    name: "Amaechi Ugwu",
    url: "https://github.com/amaechijude",
  },
  publisher: "Amaechi Ugwu",

  // icons: {
  //   icon: "/icon.jpg",
  // },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen px-4 sm:px-8 md:px-16 py-10`}
      >
        {children}
      </body>
    </html>
  );
}
