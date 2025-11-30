"use client";

import { BookCard } from "../components/UI";
import {
  BookOpen,
  Layers,
  Star,
  Quote,
  ArrowRight,
  Search as SearchIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  // Datos de los testimonios
  const testimonials = [
    { text: "¡Me encantó la selección de libros! El proceso de compra fue muy fácil.", author: "Carlos" },
    { text: "Gran experiencia, el envío fue rápido y los libros llegaron en excelente estado.", author: "Ana" },
    { text: "Un servicio excepcional, ¡lo recomiendo totalmente!", author: "Luis" },
    { text: "La calidad de los libros es increíble y siempre hay ofertas interesantes.", author: "Isabel" },
    { text: "Excelente atención al cliente, me ayudaron a encontrar el libro perfecto.", author: "Jorge" },
    { text: "Una librería que siempre tiene lo que busco, además los precios son muy buenos.", author: "Sandra" },
    { text: "Excelente variedad de géneros, ¡no me canso de comprar aquí!", author: "Paola" },
    { text: "Recibí mis libros mucho antes de lo esperado. ¡Muy recomendable!", author: "David" },
    { text: "La calidad de los libros es excelente, siempre me siento satisfecho.", author: "Mónica" },
  ];

  // Carrusel de Testimonios automático
  const [index, setIndex] = useState(0);
  const totalViews = 3;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalViews); // Cambiar de testimonio cada 3 segundos
    }, 3000);
    return () => clearInterval(interval);
  }, [totalViews]);

  return (
    <div className="w-full overflow-x-hidden">

      {/* === CONTENEDOR GLOBAL — ALINEADO AL HEADER === */}
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <section className="relative pt-20">

          {/* decorativo superior izquierdo */}
          <div className="absolute -left-32 -top-24 pointer-events-none">
            <svg
              width="550"
              height="520"
              viewBox="0 0 600 600"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#F8EFE6" />
                  <stop offset="100%" stopColor="#FFF4EA" />
                </linearGradient>
              </defs>

              <path
                d="M120 0 C 220 40, 420 0, 560 60 C 700 120, 700 300, 560 360 C 420 420, 220 380, 120 420 C 20 460, 0 320, 0 200 C 0 80, 20 -20, 120 0 Z"
                fill="url(#g1)"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* decorativo inferior derecho */}
          <div className="absolute -right-36 -bottom-20 pointer-events-none rotate-180">
            <svg
              width="550"
              height="880"
              viewBox="0 0 600 600"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0%" stopColor="#F8EFE6" />
                  <stop offset="100%" stopColor="#FFF4EA" />
                </linearGradient>
              </defs>

              <path
                d="M120 0 C 220 40, 420 0, 560 60 C 700 120, 700 300, 560 360 C 420 420, 220 380, 120 420 C 20 460, 0 320, 0 200 C 0 80, 20 -20, 120 0 Z"
                fill="url(#g2)"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* CONTENIDO HERO */}
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 pb-20">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Historias que inspiran,
                <br />
                libros que te <span className="text-indigo-600">acompañan</span>.
              </h1>

              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Una librería curada, con diseño y alma. Encuentra tu próxima lectura entre nuestras colecciones seleccionadas.
              </p>

              {/* Buscador */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative w-full sm:max-w-md">
                  <SearchIcon className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    aria-label="Buscar libros"
                    placeholder="Buscar por título, autor o tema..."
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  />
                </div>

                <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-md transition">
                  Explorar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Imagen */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[380px] h-[420px]">
                <div className="absolute -left-6 -top-6 w-72 h-72 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl rotate-6 shadow-lg" />
                <div className="absolute left-6 top-10 w-64 h-80 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/libros.png" alt="libros" className="w-full h-full object-cover"/>
                </div>

                <div className="absolute right-0 bottom-0 bg-yellow-100 px-3 py-2 rounded-full shadow-sm text-yellow-800 text-sm">
                  Selección del editor
                </div>
              </div>
            </div>
          </div>
        </section>

      </div> {/* cierre contenedor global */}

      {/* CATEGORIES */}
      <section className="bg-[#FFF8EA]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <Layers className="w-6 h-6 text-indigo-600" />
            Explorar por categorías
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[ 
              { name: "Ficción", color: "from-pink-50 to-pink-100" },
              { name: "Autoayuda", color: "from-yellow-50 to-yellow-100" },
              { name: "Negocios", color: "from-green-50 to-green-100" },
              { name: "Juvenil", color: "from-indigo-50 to-indigo-100" },
              { name: "Historia", color: "from-orange-50 to-orange-100" },
              { name: "Misterio", color: "from-rose-50 to-rose-100" },
              { name: "Fantasía", color: "from-violet-50 to-violet-100" },
              { name: "Ciencia", color: "from-cyan-50 to-cyan-100" },
            ].map((c) => (
              <button
                key={c.name}
                className="bg-white rounded-2xl p-5 text-left flex items-center gap-4 border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center shadow-sm`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6.5C4 7.88071 5.11929 9 6.5 9H19"
                      stroke="#333"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 17.5C4 16.1193 5.11929 15 6.5 15H19"
                      stroke="#333"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">{c.name}</div>
                  <div className="text-sm text-gray-500">Explora los mejores títulos</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold text-gray-900">Libros destacados</h3>
          <button className="text-indigo-600 hover:underline inline-flex items-center gap-2">
            Ver todo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[ 
            { title: "Monje que vendió su ferrari", price: "38.900", image: "/Ferrari.png" },
            { title: "El camino del artista", price: "39.900", image: "/Artista.jpg" },
            { title: "Cartas de un estoico", price: "69.900", image: "/Estoico.png" },
            { title: "Ser rico es fácil", price: "49.900", image: "/Jodido.png" },
          ].map((b) => (
            <div key={b.title} className="flex flex-col bg-white p-6 shadow-lg rounded-xl flex-grow">
              <img src={b.image} alt={b.title} className="w-full h-90 object-cover rounded-xl mb-4" />
              <h4 className="text-lg font-semibold">{b.title}</h4>
              <p className="text-gray-500">{b.price}</p>
              <button className="mt-auto inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-md transition">
                Añadir
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS - Carrusel */}
      <section className="bg-white/60">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Quote className="w-7 h-7 text-indigo-600" />
            Lo que dicen nuestros lectores
          </h3>

          <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-[33.333%] px-4 flex flex-col">
                  <blockquote className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <p className="text-gray-700 italic">“{t.text}”</p>
                    <footer className="mt-4 font-semibold text-gray-900">— {t.author}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-5 justify-center">
            {Array.from({ length:3 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-blue-400 scale-125" : "bg-gray-500"}`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl font-bold">Únete a la comunidad lectora</h4>
                <p className="mt-2 text-white">
                  Recibe recomendaciones, lanzamientos y ofertas exclusivas.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  aria-label="email"
                  placeholder="Tu correo"
                  className="px-6 py-3 rounded-2xl text-gray-900 bg-white shadow-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
                />
                <button className="bg-white text-indigo-600 px-5 py-3 rounded-full font-semibold">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
