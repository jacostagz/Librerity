"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, User, ShoppingCart } from "lucide-react";

/* ------------------------------------------------------
   HEADER — Hydration-safe (sin strings multilínea)
------------------------------------------------------ */

export function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
        
        {/* Left: logo */}
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
              <path
                d="M4 19.5C4 18.12 5.12 17 6.5 17H19"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6.5C4 7.88 5.12 9 6.5 9H19"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 3v18"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900">
            Librerity
          </Link>
        </div>

        {/* Center: search */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-2xl bg-white/95 border border-gray-100 rounded-full shadow-[0_6px_20px_rgba(48,56,79,0.08)] px-4 py-2 flex items-center gap-3 transition-all hover:shadow-[0_10px_30px_rgba(48,56,79,0.10)]">
            
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center -ml-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14" stroke="#7C5A00" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M5 12h14" stroke="#7C5A00" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>

            <Search className="w-5 h-5 text-gray-400" />

            <input
              aria-label="Buscar libros"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por título, autor o tema..."
              className="flex-1 bg-transparent text-sm placeholder-gray-400 outline-none px-2 py-2"
            />

            <button
              aria-label="Buscar"
              className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-full shadow-sm transition"
              onClick={() => console.log("Buscar:", query)}
            >
              Buscar
            </button>
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <Link href="/usuario" aria-label="Mi cuenta" className="p-2 rounded-md hover:bg-gray-100 transition">
            <User className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
          </Link>

          <Link href="/carrito" aria-label="Carrito" className="relative p-2 rounded-md hover:bg-gray-100 transition">
            <ShoppingCart className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-1.5 rounded-full shadow">
              0
            </span>
          </Link>
        </div>

      </nav>
    </header>
  );
}

/* ------------------------------------------------------
   FOOTER — seguro y sencillo
------------------------------------------------------ */

export function Footer() {
  const year = new Date().getFullYear(); // Seguro (se ejecuta en cliente)
  
  return (
    <footer className="border-t mt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-600">
          Librerity © {year} — Tu librería online sin comisiones
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------
   BOOK CARD — estilizado
------------------------------------------------------ */

export function BookCard({ title, price, image }: any) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-4 hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition transform hover:-translate-y-1">
      
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image || "/placeholder-book.png"}
          alt={title}
          className="w-full h-52 object-cover rounded-xl"
        />

        <div className="absolute top-3 left-3 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full shadow-sm">
          Bestseller
        </div>
      </div>

      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">Autor</p>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-indigo-600 font-bold text-lg">${price ?? "39.900"}</div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 py-2 rounded-md transition">
          Añadir
        </button>
      </div>
    </article>
  );
}
