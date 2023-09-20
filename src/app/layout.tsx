import ThemeRegistry from "@/components/structs/ThemeRegistry/ThemeRegistry";
import "./globals.scss";
import 'react-quill/dist/quill.snow.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bawk",
  description: "Descrição",
  viewport: {
    initialScale: 1,
    width: "device-width",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
