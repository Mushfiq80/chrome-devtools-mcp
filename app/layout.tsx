import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Plan",
  description: "Simple task planning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
