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

export default function HomePage() {
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
              height="880"  // ← YA CORREGIDO
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

              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-4">
                {/* Feature 1 */}
                <div className="flex items-center gap-3 bg-white/90 border border-gray-100 rounded-xl px-4 py-2 shadow-sm">
                  <div className="rounded-full w-9 h-9 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14" stroke="#7C5A00" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M5 12h14" stroke="#7C5A00" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Envíos a todo el país</div>
                    <div className="text-xs text-gray-500">Rápido y seguro</div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3 bg-white/90 border border-gray-100 rounded-xl px-4 py-2 shadow-sm">
                  <div className="rounded-full w-9 h-9 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M3 7h18" stroke="#4D65FF" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Pagos seguros</div>
                    <div className="text-xs text-gray-500">Wompi / PSE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[380px] h-[420px]">
                <div className="absolute -left-6 -top-6 w-72 h-72 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl rotate-6 shadow-lg" />
                <div className="absolute left-6 top-10 w-64 h-80 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img src="/libros.png" alt="libros" className="w-full h-full object-cover" />
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
          <h3 className="text-3xl font-bold text-gray-900">Libros destacados</h3>
          <button className="text-indigo-600 hover:underline inline-flex items-center gap-2">
            Ver todo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { title: "La casa de los espíritus", price: "59.900", image: "/cover1.jpg" },
            { title: "Mañanas milagrosas", price: "39.900", image: "/cover2.jpg" },
            { title: "Sapiens", price: "69.900", image: "/cover3.jpg" },
            { title: "1984", price: "49.900", image: "/cover4.jpg" },
          ].map((b) => (
            <BookCard key={b.title} title={b.title} price={b.price} image={b.image} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white/60">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Quote className="w-7 h-7 text-indigo-600" />
            Lo que dicen nuestros lectores
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Llegó rápido y el libro estaba en perfecto estado. Repetiré.", author: "María" },
              { text: "Gran selección y envío eficiente.", author: "Andrés" },
              { text: "Precio justo y atención amable.", author: "Luisa" },
            ].map((t, i) => (
              <blockquote key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-700 italic">“{t.text}”</p>
                <footer className="mt-4 font-semibold text-gray-900">— {t.author}</footer>
              </blockquote>
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
                  className="px-4 py-3 rounded-full text-white outline-none"
                />
                <button className="bg-white text-indigo-600 px-5 py-3 rounded-full font-semibold">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
