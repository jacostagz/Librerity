import "./globals.css";
import { Header, Footer } from "../components/UI";
import type { ReactNode } from "react";

export const metadata = {
  title: "Librerity",
  description: "Tu librería online sin comisiones",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        
        {/* 🔥 Todo el contenido ahora tiene el MISMO ancho que el Header */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
