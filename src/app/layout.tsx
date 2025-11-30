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
        <main className="max-w-5xl mx-auto px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
