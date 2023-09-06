import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PCRAD",
  description: "Programa de Captura y Reporte de Asistencia de Docentes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
